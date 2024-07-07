import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {
  plantsList = [
    {
      title: "Wallace-Patton",
      subtitle: "Aerospace",
      address: "119 Webb View Apt. 563",
      state: "VC"
    },
    {
      title: "Espinoza Group",
      subtitle: "Tires",
      address: "3563 Brenda Burgs",
      state: "KI"
    },
    {
      title: "Hernandez-Johnson",
      subtitle: "Tires",
      address: "462 Loyd Burgs Suite 445",
      state: "BA",
    },
    {
      title: "Carpenter, Peterson an...",
      subtitle: "Pet food",
      address: "103 Sara Junction",
      state: "LU"
    },
    {
      title: "Thornton and Sons",
      subtitle: "Automotive",
      address: "060 Donna Walks",
      state: "GN"
    },
    {
      title: "Gaines, Oconnor and C...",
      subtitle: "Aerospace",
      address: "750 Jordan Orchard Suite 067",
      state: "LV"
    },
    {
      title: "Jacobs, Ross and Guerra",
      subtitle: "Tires",
      address: "13257 Dana Drive Apt. 635",
      state: "AM"
    },
    {
      title: "Jones Group",
      subtitle: "Pet food",
      address: "04275 Devin Rapid",
      state: "CN"
    },
    {
      title: "Hamilton LLC",
      subtitle: "Aerospace",
      address: "631 Weber Vista Suite 523",
      state: "CR"
    },
    {
      title: "Henry PLC",
      subtitle: "Pet food",
      address: "6834 Wilson Ranch",
      state: "MZ"
    },
  ]
  
  constructor() { }
}
