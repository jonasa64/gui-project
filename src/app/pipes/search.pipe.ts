import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "search"
})

export class SearchPipe implements PipeTransform {
    transform(itmes: any[], searchValue: string) {
        if (!searchValue) {
            return itmes;
        }

        return itmes.filter((el) => el.title.includes(searchValue));
    }
}