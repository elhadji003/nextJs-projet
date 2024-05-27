'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  HotelSection,
  SecContent,
  SingleDestination,
  ImageDiv,
  CardInfo,
  Continent,
  Address,
  DestTitle,
  Price,
  TheButtons,
  TheButtonsIcons,
  SeeAllButtons,
} from "../../styles/Hotel.Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faEye,
  faPlusCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const getProduction = async () => {
  try {
    const res = await fetch("api/registerHotel", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();
    console.log("Fetched products:", data);
    return data;
  } catch (error) {
    console.log("Error loading products: ", error);
    return { products: [] };
  }
};

const Hotel = () => {
  const [products, setProducts] = useState([]);
  const [seeButtons, setSeeButtons] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProduction();
      setProducts(data.products);
    };
    fetchData();
  }, []);

  const handleSeeButton = (index) => {
    setSeeButtons(index === seeButtons ? null : index);
  };

  return (
    <HotelSection>
      <SecContent>
        {products.length > 0 ? (
          products.map((product, index) => (
            <SingleDestination key={index} data-aos="fade-up">
              <ImageDiv>
                <TheButtons>
                  <TheButtonsIcons onClick={() => handleSeeButton(index)}>
                    <FontAwesomeIcon icon={faPlusCircle} color="white" />
                  </TheButtonsIcons>
                  {seeButtons === index && (
                    <SeeAllButtons>
                      <TheButtonsIcons>
                        {" "}
                        <FontAwesomeIcon icon={faTrash} color="red" />{" "}
                      </TheButtonsIcons>
                      <TheButtonsIcons>
                        {" "}
                        <FontAwesomeIcon icon={faEdit} color="yellow" />{" "}
                      </TheButtonsIcons>
                      <TheButtonsIcons>
                        {" "}
                        <FontAwesomeIcon icon={faEye} color="skyblue" />{" "}
                      </TheButtonsIcons>
                    </SeeAllButtons>
                  )}
                </TheButtons>
                <Image 
                  src={product.imgName} 
                  alt="img" 
                  width={300} height={200} 
                />
              </ImageDiv>
              <CardInfo>
                <Continent>
                  <Address>{product.address}</Address>
                </Continent>
                <DestTitle>{product.nameHotel}</DestTitle>
                <Price>{product.price} par nuit</Price>
              </CardInfo>
            </SingleDestination>
          ))
        ) : (
          <div>No products available</div>
        )}
      </SecContent>
    </HotelSection>
  );
};

export default Hotel;
