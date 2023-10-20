import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Label, Input } from './Filter.styled';
import { changeFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import { useAppDispatch, useAppSelector } from 'redux/store';
export const Filter = () => {
    const filterValue = useAppSelector(selectFilter);
    const dispatch = useAppDispatch();
    const handleChangeFilter = (e) => dispatch(changeFilter(e.currentTarget.value));
    return (_jsxs(Label, { children: ["Find contacts by name:", _jsx(Input, { type: "text", value: filterValue, onChange: handleChangeFilter })] }));
};
//# sourceMappingURL=Filter.js.map