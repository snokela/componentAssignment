import SelectProduct from "./SelectProduct";
import SelectQuantity from "./SelectQuantity";

const ProductForm = ({
  productNames,
  productPrices,
  selectedIndex,
  setSelectedIndex,
  quantity,
  setQuantity
}) => {
  return (
    <>
      <SelectProduct
        productNames={productNames}
        productPrices={productPrices}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <SelectQuantity
        quantity={quantity}
        setQuantity={setQuantity}
      />
    </>
  );
}

export default ProductForm;