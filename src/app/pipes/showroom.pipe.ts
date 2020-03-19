import { Pipe, PipeTransform } from '@angular/core';

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