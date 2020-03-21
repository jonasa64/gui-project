import { Pipe, PipeTransform } from '@angular/core';

/**
 *
 * Pipe for filting by the search input
 * no  search word  it returns the items
 *
 * params
 * 
 * itmes : any
 *  searchValue : string
 * 
 * 
 */

@Pipe({
    name: "search"
})

export class SearchPipe implements PipeTransform {
    transform(itmes: any, searchValue: string) {
        if (!searchValue) {
            return itmes;
        }

        return itmes.filter((el) => el.title.includes(searchValue));
    }
}