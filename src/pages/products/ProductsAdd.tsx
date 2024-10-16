import React from "react";
import {
  Button,
  Dialog,
  DialogPanel,
  Textarea,
  NumberInput,
  SearchSelect,
  SearchSelectItem,
} from "@tremor/react";
import { useForm, SubmitHandler } from "react-hook-form";
import useProduct from "../../hooks/products/useProduct";
import { TextInput } from "../../components/ui";
import { ProductCreate } from "../../types"; // Ajusta la ruta según la estructura de tu proyecto
import { useBrand } from "../../hooks/products/useBrand";
import useCategory from "../../products/category/hooks/useCategory";

interface ProductsAddProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProductsAdd: React.FC<ProductsAddProps> = ({ isOpen, onClose }) => {
  const { addProduct } = useProduct();
  const { categories } = useCategory();
  const { brandData } = useBrand();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ProductCreate>();

  const [loading, setLoading] = React.useState<boolean>(false);

  const handleChangeBrand = (value: any) => {
    setValue("brand", value);
  };

  const handleChangeCat = (value: any) => {
    setValue("category", value);
  };

  const onSubmit: SubmitHandler<ProductCreate> = async (data) => {
    setLoading(true);
    try {
      await addProduct({
        name: data.name,
        desc: data.desc,
        quantity: data.quantity,
        price: data.price,
        image: data.image,
        category: data.category,
        brand: data.brand,
      });
      reset();
      alert("Producto creado");
      onClose();
    } catch (error) {
      console.error(error);
      alert("Error al crear el producto");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} static={true}>
      <DialogPanel>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content"
        >
          <h1 className="text-tremor-title dark:text-dark-tremor-content-emphasis">
            Crear Producto
          </h1>
          <TextInput
            error={errors.name}
            errorMessage={errors.name?.message}
            {...register("name", {
              required: "¡Este campo es requerido!",
              maxLength: { value: 30, message: "¡La longitud máxima se excede!" },
            })}
            id="name"
            placeholder="Ingresa el nombre del producto"
            label="Nombre"
          />
          <Textarea
            errorMessage={errors.desc?.message}
            {...register("desc", {
              maxLength: { value: 255, message: "La cantidad máxima es de 255 caracteres" },
            })}
            id="desc"
            className="mt-1"
          />
          <NumberInput
            errorMessage={errors.quantity?.message}
            {...register("quantity", {
              required: "¡Este campo es requerido!",
              max: { value: 32000, message: "La cantidad máxima es de 32,000" },
            })}
            id="quantity"
          />
          <NumberInput
            errorMessage={errors.price?.message}
            {...register("price", {
              required: "¡Este campo es requerido!",
              max: { value: 9999999999, message: "El precio superó la cantidad máxima" },
            })}
            id="price"
          />
          <Textarea
            errorMessage={errors.image?.message}
            {...register("image", {
              maxLength: { value: 255, message: "La cantidad máxima es de 255 caracteres" },
            })}
            id="image"
          />
          <SearchSelect onValueChange={handleChangeCat}>
            {categories.map((cat) => (
              <SearchSelectItem key={cat.id} value={cat.id}>
                {cat.name}
              </SearchSelectItem>
            ))}
          </SearchSelect>
          <SearchSelect onValueChange={handleChangeBrand}>
            {brandData.map((brand) => (
              <SearchSelectItem key={brand.id} value={brand.id}>
                {brand.name}
              </SearchSelectItem>
            ))}
          </SearchSelect>
          <Button type="submit" className="mt-8 w-full" disabled={loading}>
            {loading ? "Creando..." : "Got it!"}
          </Button>
        </form>
      </DialogPanel>
    </Dialog>
  );
};

export default ProductsAdd;