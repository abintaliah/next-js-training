import { useRouter } from "next/router";

import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

function ProductInfo() {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <div>
      <title>Product {productId}</title>
      <h1>Product {productId}</h1>

    </div>
  );
}
export default ProductInfo;
