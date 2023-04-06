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
const AccessoriesSlider = ({ page }) => {
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
      newCategory.splice(newCategory.indexOf(e.target.value));
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
        value="Casual Shoes"
        isChecked={category.includes("Casual Shoes")}
        onChange={handleFilter}
      >
        Casual Shoes
      </Checkbox>
      <br />
      <Checkbox
        value="Flip Flops & Sliders"
        isChecked={category.includes("Flip Flops & Sliders")}
        onChange={handleFilter}
      >
        Flip Flops & Sliders
      </Checkbox>
      <br />
      <Checkbox
        value="Flats"
        isChecked={category.includes("Flats")}
        onChange={handleFilter}
      >
        Flats
      </Checkbox>
      <br />
      <Checkbox
        value="Backpack"
        isChecked={category.includes("Backpack")}
        onChange={handleFilter}
      >
        Backpack
      </Checkbox>
      <br />
      <Checkbox
        value="Sliders"
        isChecked={category.includes("Sliders")}
        onChange={handleFilter}
      >
        Sliders
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

export default AccessoriesSlider;
