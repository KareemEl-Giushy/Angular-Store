export default interface Cart {
  id?: number,
  userid: number,
  date: Date,
  products: {productid: number, quantity: number}[]
}
