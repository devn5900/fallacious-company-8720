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
const SideBar = ({ page }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initCategory = searchParams.getAll("category");
  const initOrder = searchParams.get("order");
  const [category, setCategory] = React.useState(initCategory || []);
  const [order, setOrder] = React.useState(initOrder || "");

  const handleFilter = (e) => {
    let newCategory = [...category];
    // If a user changes any category it should be stored in state
    // If the category is already present pop out of the state

    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setCategory(newCategory);
  };
  // to handle sort by
  const handleSort = (e) => {
    setOrder(e.target.value);
  };
  // to persist data on url
  React.useEffect(() => {
    let params = {
      category,
    };
    order && (params.order = order);
    page && (params.page = page);
    setSearchParams(params);
  }, [category, order]);
  return (
    <Box alignItems="center" mt="3">
      <Text fontWeight="bold">Filter by Category</Text>
      <Checkbox
        value="T-Shirt"
        isChecked={category.includes("T-Shirt")}
        onChange={handleFilter}
      >
        T-Shirt
      </Checkbox>
      <br />
      <Checkbox
        value="Sweatshirt"
        isChecked={category.includes("Sweatshirt")}
        onChange={handleFilter}
      >
        Sweatshirt
      </Checkbox>
      <br />
      <Checkbox
        value="Kurta"
        isChecked={category.includes("Kurta")}
        onChange={handleFilter}
      >
        Kurta
      </Checkbox>
      <br />
      <Checkbox
        value="Hoodies"
        isChecked={category.includes("Hoodies")}
        onChange={handleFilter}
      >
        Hoodies
      </Checkbox>
      <br />
      <Checkbox
        value="Shorts"
        isChecked={category.includes("Shorts")}
        onChange={handleFilter}
      >
        Shorts
      </Checkbox>
      <Text fontWeight="bold" mt="5">
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
