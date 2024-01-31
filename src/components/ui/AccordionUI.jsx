/**Material Tailwind Components*/
import {
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

/** HeroIcons Dev Icons */
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const AccordionUI = ({ title, items,iconTitle,handleClick,stateOpen}) => {
    return (

        <Accordion
            open={stateOpen}
            icon={
                <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                />
            }
        >
            <ListItem className="p-0" selected={stateOpen}>
                <AccordionHeader onClick={() => handleClick(1)} className="border-b-0 p-3">
                    {/** Accordion Title */}
                    <ListItemPrefix className="h-5 w-5">
                        {iconTitle}
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="mr-auto font-normal">
                        {title}
                    </Typography>
                </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
                <List className="p-0">
                    {/** Array Returned Items */}
                    {
                        items.map((item) =>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                {item}
                            </ListItem>
                        )
                    }
                </List>
            </AccordionBody>
        </Accordion>
    )
}

export default AccordionUI;