import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "time"
})

export class TimehPipe implements PipeTransform {
    transform(itmes: any[], time: string) {
        if (!time) {
            return itmes;
        }

        return itmes.filter((el) => el.tidFilter == time);


    }
}