import { styled } from "@mui/joy/styles";
import Input from "@mui/joy/Input";

import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import React from "react";
import { productPersonStore } from "./Root";

export default function Search() {
  const setFound = productPersonStore((state) => state.setFoundModal);
  const StyledInput = styled("input")({
    border: "none", 
    minWidth: 0, 
    outline: 0, 
    padding: 0, 
    paddingTop: "1em",
    flex: 1,
    color: "inherit",
    backgroundColor: "transparent",
    fontFamily: "inherit",
    fontSize: "inherit",
    fontStyle: "inherit",
    fontWeight: "inherit",
    lineHeight: "inherit",
    textOverflow: "ellipsis",
    "&::placeholder": {
      opacity: 0,
      transition: "0.1s ease-out",
    },
    "&:focus::placeholder": {
      opacity: 1,
    },
    "&:focus ~ label, &:not(:placeholder-shown) ~ label, &:-webkit-autofill ~ label":
      {
        top: "0.5rem",
        fontSize: "0.75rem",
      },
    "&:focus ~ label": {
      color: "var(--Input-focusedHighlight)",
    },
    "&:-webkit-autofill": {
      alignSelf: "stretch", 
    },
    "&:-webkit-autofill:not(* + &)": {
      marginInlineStart: "calc(-1 * var(--Input-paddingInline))",
      paddingInlineStart: "var(--Input-paddingInline)",
      borderTopLeftRadius:
        "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))",
      borderBottomLeftRadius:
        "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))",
    },
  });

  const StyledLabel = styled("label")(({ theme }) => ({
    position: "absolute",
    lineHeight: 1,
    top: "calc((var(--Input-minHeight) - 1em) / 2)",
    color: theme.vars.palette.text.tertiary,
    fontWeight: theme.vars.fontWeight.md,
    transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
  }));

  const InnerInput = React.forwardRef<
    HTMLInputElement,
    JSX.IntrinsicElements["input"]
  >(function InnerInput(props, ref) {
    const id = React.useId();
    return (
      <React.Fragment>
        <StyledInput {...props} ref={ref} id={id} />
        <StyledLabel htmlFor={id}>Search</StyledLabel>
      </React.Fragment>
    );
  });
  return (
    <div className="flex justify-center py-10">
      <Input
        className="w-[450px]"
        endDecorator={
          <button
            onClick={() => {
              console.log(123);
            }}
          >
            <SearchOutlined />
          </button>
        }
        onChange={(e) => {
          console.log(e.target.value);
        }}
        slots={{ input: InnerInput }}
        slotProps={{ input: { placeholder: "Search", type: "text" } }}
        sx={{
          "--Input-minHeight": "56px",
          "--Input-radius": "6px",
        }}
      />
      <button
        onClick={() => {
          setFound(false);
        }}
        className="ml-3"
      >
        <CloseOutlined style={{ fontSize: "23px" }} />
      </button>
    </div>
  );
}
