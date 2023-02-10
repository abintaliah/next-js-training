import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

function Review() {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <h1>
      Product {productId} Review {reviewId}
    </h1>
  );
}
export default Review;
