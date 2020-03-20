import { Pipe, PipeTransform } from '@angular/core';


/**
 *
 * Pipe for filting by the time 
 * no  time selected it returns the items
 *
 * params
 *
 * itmes : any
 * time : string
 *
 *
 */

@Pipe({
    name: "time"
})

export class TimehPipe implements PipeTransform {
    transform(itmes: any, time: string) {

        if (!itmes) {
            return 'No results found';
        }

        if (!time) {
            return itmes;
        }

        return itmes.filter((el) => el.tidFilter == time);


    }
}