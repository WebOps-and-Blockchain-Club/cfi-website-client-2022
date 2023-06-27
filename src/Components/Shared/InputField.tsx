import { Autocomplete, InputLabel, Select } from "@mui/material";
import inputLabelClasses from "@mui/material/InputLabel/inputLabelClasses";
import outlinedInputClasses from "@mui/material/OutlinedInput/outlinedInputClasses";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/styles";

export const CustomTextField = styled(TextField)({
  [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: "#d6d6d6",
  },
  //   [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]:
  //     {
  //       borderColor: "#d6d6d6",
  //     },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
  {
    borderColor: "#FF0000",
  },
  [`& .${outlinedInputClasses.input}`]: {
    color: "#d6d6d6",
  },
  //   [`&:hover .${outlinedInputClasses.input}`]: {
  //     color: "#d6d6d6",
  //   },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused}`]: {
    color: "#FF0000",
  },
  [`& .${outlinedInputClasses.input}`]: {
    color: "#D6D6D6",
  },
  [`& .${inputLabelClasses.outlined}`]: {
    color: "#d6d6d6",
  },
  //   [`&:hover .${inputLabelClasses.outlined}`]: {
  //     color: "#d6d6d6",
  //   },
  [`& .${inputLabelClasses.outlined}.${inputLabelClasses.focused}`]: {
    color: "#FF0000",
  },
});

export const CustomInputLabel = styled(InputLabel)({
  [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: "#d6d6d6",
  },
  //   [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]:
  //     {
  //       borderColor: "#d6d6d6",
  //     },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
  {
    borderColor: "#FF0000",
  },
  [`& .${outlinedInputClasses.input}`]: {
    color: "#d6d6d6",
  },
  //   [`&:hover .${outlinedInputClasses.input}`]: {
  //     color: "#d6d6d6",
  //   },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused}`]: {
    color: "#FF0000",
  },
  [`& .${outlinedInputClasses.input}`]: {
    color: "#D6D6D6",
  },
  [`& .${inputLabelClasses.outlined}`]: {
    color: "#d6d6d6",
  },
  //   [`&:hover .${inputLabelClasses.outlined}`]: {
  //     color: "#d6d6d6",
  //   },
  [`& .${inputLabelClasses.outlined}.${inputLabelClasses.focused}`]: {
    color: "#FF0000",
  },
});

export const CustomAutocomplete = styled(Autocomplete)({
  [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: "#d6d6d6",
  },
  //   [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]:
  //     {
  //       borderColor: "#d6d6d6",
  //     },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
  {
    borderColor: "#FF0000",
  },
  [`& .${outlinedInputClasses.input}`]: {
    color: "#d6d6d6",
  },
  //   [`&:hover .${outlinedInputClasses.input}`]: {
  //     color: "#d6d6d6",
  //   },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused}`]: {
    color: "#FF0000",
  },
  [`& .${outlinedInputClasses.input}`]: {
    color: "#D6D6D6",
  },
  [`& .${inputLabelClasses.outlined}`]: {
    color: "#d6d6d6",
  },
  //   [`&:hover .${inputLabelClasses.outlined}`]: {
  //     color: "#d6d6d6",
  //   },
  [`& .${inputLabelClasses.outlined}.${inputLabelClasses.focused}`]: {
    color: "#FF0000",
  },
  [`& .MuiAutocomplete-tag`]: {
    backgroundColor: "#D6D6D6",
  },
  [`& .MuiAutocomplete-clearIndicator`]: {
    color: "#D6D6D6",
  },
  [`& .MuiAutocomplete-popupIndicator`]: {
    color: "#D6D6D6",
  },
});

export const CustomSelect = styled(Select)({
  [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: "#d6d6d6",
  },
  //   [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]:
  //     {
  //       borderColor: "#d6d6d6",
  //     },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
  {
    borderColor: "#FF0000",
  },
  [`& .${outlinedInputClasses.input}`]: {
    color: "#d6d6d6",
  },
  //   [`&:hover .${outlinedInputClasses.input}`]: {
  //     color: "#d6d6d6",
  //   },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused}`]: {
    color: "#FF0000",
  },
  [`& .${outlinedInputClasses.input}`]: {
    color: "#D6D6D6",
  },
  [`& .${inputLabelClasses.outlined}`]: {
    color: "#d6d6d6",
  },
  //   [`&:hover .${inputLabelClasses.outlined}`]: {
  //     color: "#d6d6d6",
  //   },
  [`& .${inputLabelClasses.outlined}.${inputLabelClasses.focused}`]: {
    color: "#FF0000",
  },
  [`& .MuiAutocomplete-tag`]: {
    backgroundColor: "#D6D6D6",
  },
  [`& .MuiAutocomplete-clearIndicator`]: {
    color: "#D6D6D6",
  },
  [`& .MuiAutocomplete-popupIndicator`]: {
    color: "#D6D6D6",
  },
});
