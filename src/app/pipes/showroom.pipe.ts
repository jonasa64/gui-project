import { Pipe, PipeTransform } from '@angular/core';

/**
 *
 * Pipe for filting by the showroom 
 * no  value is selected  it returns the items
 *
 * params
 *
 * itmes : any
 *  value : string
 *
 *
 */


@Pipe({
    name: "Showroom"
})

export class ShowroomPipe implements PipeTransform {
    transform(itmes: any, value: string) {
        if (!value) {
            return itmes;
        }


        return itmes.filter((el) => el.Showroom === value);
    }
}