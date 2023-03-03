export default function YearMonthSelector() {
    return (
        <section id="date-selector">
            <label htmlFor="year">Year</label>
            <select name="year" id="year">
                <option value="">
                    --Please select an year
                </option>
                <option value="2023">
                    2023
                </option>
                <option value="2022">
                    2022
                </option>
                <option value="2021">
                    2021
                </option>
            </select>
            <label htmlFor="month">Month</label>
            <select name="month" id="month">
                <option value="">
                    --Please select an month
                </option>
                <option value="1">
                    1
                </option>
                <option value="2">
                    2
                </option>
                <option value="3">
                    3
                </option>
            </select>
        </section>
    )
}
