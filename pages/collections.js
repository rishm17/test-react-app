import { useState } from "react";
import { cardVariant, parentVariant } from "../utils/motion";
import data from '../utils/dummy_data'
import ProductModal from "../Components/ProductModal";
import { motion } from "framer-motion";
import ProductCard from "../Components/ProductCard";
import { Box, SimpleGrid } from "@chakra-ui/react";

const MotionSimpleGrid = motion(SimpleGrid);
const MotionBox = motion(Box);

export default function Collection() {
  const [modalData, setModalData] = useState(null);
  return (
    <Box>
      <MotionSimpleGrid
        mt="4"
        minChildWidth="250px"
        spacing="2em"
        minH="full"
        variants={parentVariant}
        initial="initial"
        animate="animate"
      >
        {data.map((product, i) => (
          <MotionBox variants={cardVariant} key={i}>
            <ProductCard product={product} setModalData={setModalData} />
          </MotionBox>
        ))}
      </MotionSimpleGrid>
      <ProductModal
        isOpen={modalData ? true : false}
        onClose={() => setModalData(null)}
        modalData={modalData}
      />
    </Box>
  );
}

