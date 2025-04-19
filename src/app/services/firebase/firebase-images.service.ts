import { Injectable } from '@angular/core';
import { Storage, ref, listAll, getDownloadURL } from '@angular/fire/storage';
import { ImageData } from '../../features/landing-page/landing-page.type';

@Injectable({
  providedIn: 'root',
})
export class FirebaseImagesService {
  constructor(private storage: Storage) {}

  async getLandingPageImages(): Promise<ImageData[]> {
    const folderPath = 'landing-page/';

    try {
      const folderRef = ref(this.storage, folderPath);
      const result = await listAll(folderRef);
      const images: ImageData[] = await Promise.all(
        result.items.map(async (item) => {
          const url = await getDownloadURL(item);
          return {
            name: item.name,
            url,
          };
        }),
      );

      return images;
    } catch (error) {
      console.error('Error fetching images:', error);
      return [];
    }
  }
}
