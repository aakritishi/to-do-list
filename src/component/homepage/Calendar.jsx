import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function BasicDateCalendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        className="text-white"
        readOnly
        sx={{
          width: "100%",
          "& .MuiPickersCalendarHeader-root": {
            paddingLeft: "4px",
            paddingRight: "4px",
            maxWidth: "100%",
          },
          "& .MuiDayCalendar-header, & .MuiDayCalendar-weekContainer": {
            justifyContent: "space-around",
            maxWidth: "100%",
          },
          "& .MuiPickersDay-root": {
            margin: "1px",
          },
        }}
      />
    </LocalizationProvider>
  );
}
