import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "category"
})

export class CategoryPipe implements PipeTransform {
    transform(itmes: any[], Kategori: string) {
        if (!Kategori) {
            return itmes;
        }

        return itmes.filter((el) => el.Kategori === Kategori);
    }
}