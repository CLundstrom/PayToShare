import {firestore} from 'firebase/app';
import Timestamp = firestore.Timestamp;
import {Tag} from './tag';
import {Format} from './format';
import {Item} from './item';

export class License implements Item {
  id?: string;
  title: string;
  tag: Tag;
  format: Format;
  quantity: number;
  price: number;
  salePrice: number;
  imageUrl: string;
  description: string;
  created: firebase.firestore.Timestamp;

  constructor() {
    this.created = Timestamp.now();
    this.salePrice = 0;
    this.imageUrl = 'https://firebasestorage.googleapis.com/v0/b/paytoshare-b4cd1.appspot.com' +
      '/o/productImage%2Fgd.png?alt=media&token=b2ddece0-7aa1-43c8-8a83-e0e2930d5b7d';
  }
}
