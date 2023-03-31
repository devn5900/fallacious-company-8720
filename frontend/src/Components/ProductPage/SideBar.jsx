import {
  Box,
  Checkbox,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useSearchParams } from "react-router-dom";
const SideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initCategory = searchParams.getAll("category");
  const initOrder = searchParams.get("order");
  const [category, setCategory] = React.useState(initCategory || []);
  const [order, setOrder] = React.useState(initOrder || "");
  // console.log(category, "orr");
  const handleFilter = (e) => {
    let newCategory = [...category];
    // If a user changes any category it should be stored in state
    // If the category is already present pop out of the state
    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value));
    } else {
      newCategory.push(e.target.value);
    }
    setCategory(newCategory);
  };
  // to handle sort by
  const handleSort = (e) => {
    setOrder(e.target.value);
    // console.log(e.target.value);
  };
  // to persist data on url
  React.useEffect(() => {
    let params = {
      category,
    };
    order && (params.order = order);
    setSearchParams(params);
  }, [category, order]);
  return (
    <Box alignItems="center">
      <Text fontWeight="bold">Filter by</Text>
      <Checkbox
        value="male"
        isChecked={category.includes("male")}
        onChange={handleFilter}
      >
        Men's
      </Checkbox>
      <br />
      <Checkbox
        value="female"
        isChecked={category.includes("female")}
        onChange={handleFilter}
      >
        Women's
      </Checkbox>
      <br />
      <Checkbox
        value="children"
        isChecked={category.includes("children")}
        onChange={handleFilter}
      >
        Accessories
      </Checkbox>
      <Text fontWeight="bold" mt="8">
        Sort By Price
      </Text>
      <RadioGroup mt="2" defaultValue={order}>
        <Stack direction="column" name="sort" onChange={handleSort}>
          <Radio name="sort" value="asc">
            Asending
          </Radio>
          <Radio name="sort" value="desc">
            Decending
          </Radio>
        </Stack>
      </RadioGroup>
    </Box>
  );
};

export default SideBar;
