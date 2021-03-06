import { product, small_category } from "dummy_data/category";
import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Product from "components/Product";

const Sale = () => {
  const [product_data, setProduct_data] = useState(product[0]);
  const [is_active, setActive] = useState("normal");

  const changeCategory = (e) => {
    setProduct_data(product[e.target.value]);
  };

  return (
    <Container>
      <h1>Sale</h1>
      <CategoryContainer>
        {small_category.map((p, idx) => {
          return (
            <Category onClick={changeCategory} value={idx} id={p} key={idx}>
              {p}
            </Category>
          );
        })}
      </CategoryContainer>
      <Bar>
        <SumProduct>총 {product_data.length}개의 상품이 있습니다.</SumProduct>
        <SortMenu>
          <Sort
            active={is_active}
            type="normal"
            onClick={() => {
              const setting = [...product_data].sort((a, b) => {
                return a.id - b.id;
              });
              setProduct_data(setting);
              setActive("normal");
            }}
          >
            기본순
          </Sort>
          <Sort
            active={is_active}
            type="highstar"
            onClick={() => {
              const setting = [...product_data].sort((a, b) => {
                return b.star - a.star;
              });
              setProduct_data(setting);
              setActive("highstar");
            }}
          >
            별점높은순
          </Sort>
          <Sort
            active={is_active}
            type="highprice"
            onClick={() => {
              const setting = [...product_data].sort((a, b) => {
                return parseInt(b.price) - parseInt(a.price);
              });
              setProduct_data(setting);
              setActive("highprice");
            }}
          >
            높은가격순
          </Sort>
          <Sort
            active={is_active}
            type="lowprice"
            onClick={() => {
              const setting = [...product_data].sort((a, b) => {
                return parseInt(a.price) - parseInt(b.price);
              });
              console.log(setting);
              setProduct_data(setting);
              setActive("lowprice");
            }}
          >
            낮은가격순
          </Sort>
        </SortMenu>
      </Bar>
      <ProductContainer>
        <Products>
          {product_data
            ? product_data.map((p, idx) => {
                return <Product key={idx} {...p} />;
              })
            : null}
        </Products>
      </ProductContainer>
    </Container>
  );
};

const Bar = styled.div`
  display: flex;
  flex-direction: row;
  width: 85%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid;
  padding: 25px 0px;
  @media only screen and (max-width: 680px) {
    flex-direction: column;
  }
`;

const SumProduct = styled.div`
  font-family: "GowunDodum-Regular";
  @media only screen and (max-width: 680px) {
    margin-bottom: 20px;
  }
`;

const SortMenu = styled.div`
  @media only screen and (max-width: 370px) {
    font-size: 4vw;
  }
  user-select: none;
  display: flex;
  flex-direction: row;
  gap: 0px 10px;
`;

const Sort = styled.div`
  display: flex;
  cursor: pointer;
  font-family: "GowunDodum-Regular";
  font-weight: ${(props) => (props.active === props.type ? "600" : "")};
  :hover {
    font-weight: 600;
  }
`;

const Container = styled.div`
  width: calc(100%-200px);
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  align-items: center;
`;

const CategoryContainer = styled.ul`
  margin-top: 10px;
  user-select: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  word-break: keep-all;
  flex-direction: column;
  row-gap: 10px;
  @media only screen and (max-width: 400px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Category = styled.li`
  cursor: pointer;
  display: flex;
  margin: auto 20px;
  :hover {
    font-weight: 600;
  }
`;

const ProductContainer = styled.div`
  display: flex;
  margin-top: 50px;
`;

const Products = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  @media only screen and (max-width: 1600px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  @media only screen and (max-width: 1350px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media only screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 610px) {
    grid-template-columns: 1fr;
  }
  gap: 30px 10px;
`;

export default Sale;
