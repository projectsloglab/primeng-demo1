import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CountryService {
  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http
      .get<Country>('assets/countries.json');
  }
}

class Country {
  constructor(public data: CountryData[]) {}
}

interface CountryData {
  name: string;
  code: string;
}
