import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "valuation"
})

export class ValationPipe implements PipeTransform {

    transform(itmes: any, vurdering: string) {


        if (!vurdering) {
            return itmes;
        }




        return itmes.filter((el) => el.Vurderingsort == vurdering) || 'no items found';
    }
}