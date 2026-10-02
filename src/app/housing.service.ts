import { Injectable } from "@angular/core";
import { HousingLocation } from "./housing-location";

@Injectable({
  providedIn: "root",
})
export class HousingService {
  // Données statiques (compatibles GitHub Pages) : chemin relatif au base href
  public url: string = "assets/db.json";

  constructor() { }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    const json = await data.json();
    return json?.locations ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const locations = await this.getAllHousingLocations();
    return locations.find(location => location.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
