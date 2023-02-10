import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { NewLineKind } from "typescript";

function Product({ productId = 100 }) {
  return (
    <div>
      <title> Product Page</title>
      <h1>Available Products</h1>
      <Link href="/product/1" legacyBehavior>
        <a>Product Reviews</a>
      </Link>
      <br />
      <Link href="/product/2" legacyBehavior replace>
        <a>Product Review 1</a>
      </Link>
      <br />
      <Link href={`/product/${productId}`} legacyBehavior>
        <a>Product {productId}</a>
      </Link>
    </div>
  );
}

export default Product;
