interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {

  return;
}

interface ProductDetail {
  id: number;
  name: string;
  price: number;
}

type ShoppingItem = Pick<Product, 'id'>

function displayProductDetail(shoppingItem: ShoppingItem) {

}

function updateProductItem(productItem: Partial<Product>) {

}


interface UserProfile  {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

interface UserProfileUpdate {
  username?: string;
  email?: string;
  profilePhotoUrl?: string;
}

type UserProfileUpdate = {
  username?: UserProfile['username'];
  email?: UserProfile['email'];
  profilePhotoUrl?: UserProfile['profilePhotoUrl'];
}

type UserProfileUpdate = { // Mapped Type
  [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p] // 3번 반복한다.
}

type UserProfileKeys = keyof UserProfile;

type UserProfileUpdate = {
  [p in keyof UserProfile]?: UserProfile[p];
}

type Subset<T> = {
  [p in keyof T]?: T[p];
}

