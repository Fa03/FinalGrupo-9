import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";

export const DataPicker = () => {
	const [selectedDate, setSelectedDate] = useState(new Date());

	const handleDateChange = date => {
		setSelectedDate(date);
	};

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<KeyboardDatePicker
				disableToolbar
				variant="inline"
				format="MM/dd/yyyy"
				margin="normal"
				id="date-picker-inline"
				value={selectedDate}
				onChange={handleDateChange}
				KeyboardButtonProps={{
					"aria-label": "change date"
				}}
			/>
		</MuiPickersUtilsProvider>
	);
};
