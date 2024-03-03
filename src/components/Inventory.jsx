import Candy from "./Candy"
import { useSelector } from "react-redux"
import { selectCandies } from "../redux/candySlice"
import { useDispatch } from "react-redux"
import { addCandy } from "../redux/candySlice"
import { css } from "@emotion/react"

export default function Inventory() {
  const candyList = [
    {
      id: 1,
      name: "Swedish Fish",
      price: 0.01,
      inStock: 2500,
      photoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/40/Swedish_fish.png",
    },
    {
      id: 2,
      name: "Cry Baby",
      price: 0.05,
      inStock: 450,
      photoUrl:
        "https://www.candyretailer.com/images/products/Cry-Baby-12oz.jpg",
    },
    {
      id: 3,
      name: "Atomic Fireball",
      price: 0.05,
      inStock: 280,
      photoUrl:
        "https://cdn.shopify.com/s/files/1/1435/0472/products/atomic-fireballs-jaw-breakers-retro-candy.jpg?v=1530153409",
    },
    {
      id: 4,
      name: "Root Beer Barrel",
      price: 0.05,
      inStock: 200,
      photoUrl:
        "https://nuts.com/images/rackcdn/ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/f6ae7d27ce0d652d.cro-OLlV7MKo-zoom.jpg",
    },
    {
      id: 5,
      name: "Tootsie Roll (small)",
      price: 0.01,
      inStock: 1250,
      photoUrl:
        "https://cdn.shopify.com/s/files/1/0972/7116/products/all-city-candy-tootsie-roll-midgees-bank-4-oz-novelty-tootsie-roll-industries-350643_600x.jpg",
    },
    {
      id: 6,
      name: "Sour Patch Kids",
      price: 0.01,
      inStock: 2200,
      photoUrl:
        "https://smhttp-ssl-60529-live.nexcesscdn.net/pub/media/catalog/product/cache/4226787a49a240193bc173af0a49120d/s/o/sour_patch_kids_bulk_new.jpg",
    },
    {
      id: 7,
      name: "Pixy Stix",
      price: 0.05,
      inStock: 600,
      photoUrl:
        "https://cdn.shopify.com/s/files/1/0972/7116/products/all-city-candy-pixy-stix-candy-powder-6-assorted-color-straws-pack-of-100-powdered-candy-nestle-default-title-559693_600x.jpg",
    },
    {
      id: 8,
      name: "Jolly Rancher (large)",
      price: 0.25,
      inStock: 840,
      photoUrl:
        "https://i.pinimg.com/736x/be/6a/61/be6a614943131628766f89e613d50ba0--jolly-rancher-sticks-favorite-color.jpg",
    },
    {
      id: 9,
      name: "Jolly Rancher (small)",
      price: 0.05,
      inStock: 2730,
      photoUrl:
        "https://www.discountcoffee.com/media/catalog/product/cache/dd917f5fa5c6ef77f6921b5e47bbbf2b/j/o/jolly-rancher-individually-wrapped-candy.jpg",
    },
    {
      id: 10,
      name: "Dum Dums Pop",
      price: 0.1,
      inStock: 1370,
      photoUrl:
        "https://smhttp-ssl-60529-live.nexcesscdn.net/pub/media/catalog/product/cache/4226787a49a240193bc173af0a49120d/d/u/dum-dum-lollipops-bulk.jpg",
    },
    {
      id: 11,
      name: "Smarties",
      price: 0.05,
      inStock: 790,
      photoUrl:
        "https://cdn.shopify.com/s/files/1/0972/7116/products/all-city-candy-smarties-15-tablet-candy-rolls-3-lb-bulk-bag-bulk-wrapped-smarties-candy-company-134815_600x.jpg",
    },
    {
      id: 12,
      name: "Jawbreaker",
      price: 0.05,
      inStock: 360,
      photoUrl:
        "https://cdn11.bigcommerce.com/s-1b75a/images/stencil/1280x1280/products/264/327/jawbreakerBizarreBruiser__51836.1311709718.jpg",
    },
    {
      id: 13,
      name: "Tootsie Pop",
      price: 0.25,
      inStock: 255,
      photoUrl:
        "https://nuts.com/images/rackcdn/ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/933160bcc0b0a830-GAbGVCfW-large.jpg",
    },
    {
      id: 14,
      name: "Blow Pop",
      price: 0.25,
      inStock: 240,
      photoUrl:
        "https://cdn.shopify.com/s/files/1/0972/7116/products/assortedblowpops_c8492a61-e4d6-443c-b37c-630ae03073d7_600x.jpg?v=1596745386",
    },
    {
      id: 15,
      name: "Dubble Bubble",
      price: 0.05,
      inStock: 745,
      photoUrl:
        "https://nuts.com/images/rackcdn/ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/0993fb024232491e-X_PIhL6-.jpg",
    },
    {
      id: 16,
      name: "Sixlets",
      price: 0.1,
      inStock: 430,
      photoUrl:
        "https://cdn11.bigcommerce.com/s-b1f60/images/stencil/1280x1280/products/506/1461/sixlets__29073.1422036161.jpg",
    },
    {
      id: 17,
      name: "Chick-O-Stick",
      price: 0.1,
      inStock: 380,
      photoUrl:
        "https://cdn.shopify.com/s/files/1/0148/3295/9574/products/ChickOStick_1200x633.jpg?v=1569352015",
    },
    {
      id: 18,
      name: "Bazooka Gum",
      price: 0.05,
      inStock: 720,
      photoUrl: "https://images.wsj.net/im-798347",
    },
    {
      id: 19,
      name: "WarHeads",
      price: 0.05,
      inStock: 625,
      photoUrl:
        "https://www.professionalvendingsupply.com/assets/images/product%20images/candy/wrapped%20candy/warheads.jpg",
    },
    {
      id: 20,
      name: "Everlasting Gobstopper",
      price: 0.05,
      inStock: 260,
      photoUrl:
        "https://www.shopthebulkstore.com/pub/media/catalog/product/cache/a217a25e9089c8a69334ee6aa99b65f6/w/o/wonka_everlasting_gobstopper_2.jpg",
    },
  ]

  const candies = useSelector(selectCandies)
  const dispatch = useDispatch()

  for (let candy of candyList) {
    dispatch(addCandy(candy))
  }

  const styles = css`
    display: flex;
    flex-wrap: wrap;
  `

  return (
    <div css={styles}>
      <h3>Inventory</h3>
      {candies.map((candy) => (
        <Candy key={candy.id} candy={candy} />
      ))}
    </div>
  )
}
