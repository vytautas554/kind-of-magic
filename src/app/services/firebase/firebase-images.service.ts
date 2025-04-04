import { Injectable } from '@angular/core';
import { Storage, ref, listAll, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseImagesService {

  constructor(private storage: Storage) {}

  async getAllImages(folderPath: string = 'testas/'): Promise<string[]> {
    try {
      const folderRef = ref(this.storage, folderPath);
      console.log('folderRef', folderRef)
      const result = await listAll(folderRef);
      console.log('result', result);
      return Promise.all(result.items.map(item => getDownloadURL(item)));
    } catch (error) {
      console.error('Error fetching images:', error);
      return [];
    }
  }
}
