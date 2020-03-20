import { Pipe, PipeTransform } from '@angular/core';
/**
 * 
 * Pipe for filting the caregory
 * no  caregory selected it returns the items
 * 
 * params
 * 
 * itmes : any
 * searchValue : string
 * 
 */
@Pipe({
    name: "category"
})

export class CategoryPipe implements PipeTransform {
    transform(itmes: any, Kategori: string) {
        if (!Kategori) {
            return itmes;
        }

        return itmes.filter((el) => el.Kategori === Kategori);
    }
}