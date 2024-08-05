import PropTypes from "prop-types";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useState } from "react";

/**
 *
 * Primary UI Accordion
 */
export interface AccordionProps {
  multiple: boolean;
  contents: Content[];
  setContents: React.Dispatch<Content>[];
}
interface Content {
  summary: string;
  active: boolean;
}

export function Accordion({ multiple, contents }: AccordionProps) {
  const [accordionContents, setAccordionContents] =
    useState<Content[]>(contents);
  const [multipleActive, setMultipleActive] = useState(multiple);
  return (
    <div className="w-full p-4 rounded-md bg-slate-900 text-white">
      {contents.map((content, index) => (
        <div className=" border-b-2 border-white hover:border-2 border-white">
          <div
            key={index}
            className="flex p-4 cursor-pointer w-full justify-between"
            onClick={() =>
              setAccordionContents((prevState) => {
                let newState = [...prevState];
                if (multiple) {
                  newState[index] = {
                    ...newState[index],
                    active: !newState[index].active,
                  };
                } else {
                  newState.forEach((content, contentIndex) => {
                    if (content.active && contentIndex !== index)
                      content.active = false;
                    else content.active = true;
                  });
                }
                return newState;
              })
            }
          >
            <div className="">
              <span>Accordion Item {index}</span>
            </div>
            {content.active ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </div>
          {content.active && (
            <div>
              <p className="p-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos,
                facere minus accusantium consequatur in doloribus architecto ut
                laudantium adipisci repellat.
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

Accordion.propTypes = {
  /**
   * Support multiple dropdowns
   */
  multiple: PropTypes.bool,

  content: PropTypes.shape({
    summary: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
  }).isRequired,
};

Accordion.defaultProps = {
  multiple: false,
  contents: [
    {
      summary:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, facere minus accusantium consequatur in doloribus architecto ut laudantium adipisci repellat.",
      active: false,
    },
    {
      summary:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, facere minus accusantium consequatur in doloribus architecto ut laudantium adipisci repellat.",
      active: false,
    },
  ],
};

export default Accordion;
