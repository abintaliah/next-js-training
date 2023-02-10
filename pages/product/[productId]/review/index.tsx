import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

function Review() {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <div>
      <title>{productId} Reviews</title>
      <h1>
        Product {productId} {reviewId}Reviews
      </h1>
    </div>
  );
}

export default Review;
