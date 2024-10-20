export interface Miasto {
    nazwa: string;
    koordynatX: number;
    koordynatY: number;
    populacja: number;
    powierzchnia: number;
    procentDzieci: number;
    procentMlodziez: number;
    procentDorosli: number;
    procentEmeryci: number;
    procentMezczyzni: number;
    procentWyksztalcenieWyzsze: number;
  }

  export interface IPickedCity {
    city_name: string,
    marketing: number
  }
  
  export const miasta: Miasto[] = [
    {
      nazwa: "Warszawa",
      koordynatX: 52.2297,
      koordynatY: 21.0122,
      populacja: 1793579,
      powierzchnia: 517.24,
      procentDzieci: 15.3,
      procentMlodziez: 12.6,
      procentDorosli: 55.1,
      procentEmeryci: 17.0,
      procentMezczyzni: 47.8,
      procentWyksztalcenieWyzsze: 46.0
    },
    {
      nazwa: "Krakow",
      koordynatX: 50.0647,
      koordynatY: 19.945,
      populacja: 779115,
      powierzchnia: 327.0,
      procentDzieci: 14.8,
      procentMlodziez: 13.1,
      procentDorosli: 55.4,
      procentEmeryci: 16.7,
      procentMezczyzni: 48.2,
      procentWyksztalcenieWyzsze: 43.5
    },
    {
      nazwa: "Lodz",
      koordynatX: 51.7592,
      koordynatY: 19.458,
      populacja: 682679,
      powierzchnia: 293.25,
      procentDzieci: 13.7,
      procentMlodziez: 12.2,
      procentDorosli: 56.2,
      procentEmeryci: 17.9,
      procentMezczyzni: 46.9,
      procentWyksztalcenieWyzsze: 38.4
    },
    {
      nazwa: "Wroclaw",
      koordynatX: 51.1079,
      koordynatY: 17.0385,
      populacja: 642869,
      powierzchnia: 292.92,
      procentDzieci: 14.2,
      procentMlodziez: 13.0,
      procentDorosli: 55.8,
      procentEmeryci: 17.0,
      procentMezczyzni: 48.0,
      procentWyksztalcenieWyzsze: 44.1
    },
    {
      nazwa: "Poznan",
      koordynatX: 52.4064,
      koordynatY: 16.9252,
      populacja: 532048,
      powierzchnia: 261.85,
      procentDzieci: 14.6,
      procentMlodziez: 12.5,
      procentDorosli: 55.6,
      procentEmeryci: 17.3,
      procentMezczyzni: 47.9,
      procentWyksztalcenieWyzsze: 43.0
    },
    {
      nazwa: "Gdansk",
      koordynatX: 54.352,
      koordynatY: 18.6466,
      populacja: 470907,
      powierzchnia: 262.0,
      procentDzieci: 14.9,
      procentMlodziez: 13.2,
      procentDorosli: 55.1,
      procentEmeryci: 16.8,
      procentMezczyzni: 48.1,
      procentWyksztalcenieWyzsze: 41.5
    },
    {
      nazwa: "Szczecin",
      koordynatX: 53.4285,
      koordynatY: 14.5528,
      populacja: 398255,
      powierzchnia: 300.55,
      procentDzieci: 14.3,
      procentMlodziez: 12.7,
      procentDorosli: 56.4,
      procentEmeryci: 16.6,
      procentMezczyzni: 47.6,
      procentWyksztalcenieWyzsze: 39.0
    },
    {
      nazwa: "Bydgoszcz",
      koordynatX: 53.1235,
      koordynatY: 18.0084,
      populacja: 341782,
      powierzchnia: 176.03,
      procentDzieci: 14.0,
      procentMlodziez: 12.5,
      procentDorosli: 56.5,
      procentEmeryci: 17.0,
      procentMezczyzni: 47.9,
      procentWyksztalcenieWyzsze: 38.2
    },
    {
      nazwa: "Lublin",
      koordynatX: 51.2465,
      koordynatY: 22.5684,
      populacja: 338586,
      powierzchnia: 147.47,
      procentDzieci: 13.8,
      procentMlodziez: 12.4,
      procentDorosli: 56.0,
      procentEmeryci: 17.8,
      procentMezczyzni: 48.0,
      procentWyksztalcenieWyzsze: 39.5
    },
    {
      nazwa: "Katowice",
      koordynatX: 50.2649,
      koordynatY: 19.0238,
      populacja: 292774,
      powierzchnia: 164.67,
      procentDzieci: 14.4,
      procentMlodziez: 12.6,
      procentDorosli: 55.3,
      procentEmeryci: 17.7,
      procentMezczyzni: 47.7,
      procentWyksztalcenieWyzsze: 40.7
    },
    {
      nazwa: "Bialystok",
      koordynatX: 53.1325,
      koordynatY: 23.1688,
      populacja: 297288,
      powierzchnia: 102.12,
      procentDzieci: 14.7,
      procentMlodziez: 12.4,
      procentDorosli: 55.5,
      procentEmeryci: 17.4,
      procentMezczyzni: 48.1,
      procentWyksztalcenieWyzsze: 39.2
    },
    {
      nazwa: "Gdynia",
      koordynatX: 54.5189,
      koordynatY: 18.5319,
      populacja: 246348,
      powierzchnia: 135.14,
      procentDzieci: 14.6,
      procentMlodziez: 12.6,
      procentDorosli: 55.0,
      procentEmeryci: 17.8,
      procentMezczyzni: 48.0,
      procentWyksztalcenieWyzsze: 41.0
    },
    {
      nazwa: "Czestochowa",
      koordynatX: 50.811,
      koordynatY: 19.1203,
      populacja: 218727,
      powierzchnia: 159.71,
      procentDzieci: 14.2,
      procentMlodziez: 12.0,
      procentDorosli: 56.1,
      procentEmeryci: 17.7,
      procentMezczyzni: 47.5,
      procentWyksztalcenieWyzsze: 37.1
    },
    {
      nazwa: "Radom",
      koordynatX: 51.4027,
      koordynatY: 21.0122,
      populacja: 210532,
      powierzchnia: 111.8,
      procentDzieci: 14.5,
      procentMlodziez: 12.5,
      procentDorosli: 55.4,
      procentEmeryci: 17.6,
      procentMezczyzni: 48.2,
      procentWyksztalcenieWyzsze: 36.4
    },
    {
      nazwa: "Sosnowiec",
      koordynatX: 50.2863,
      koordynatY: 19.104,
      populacja: 197586,
      powierzchnia: 91.06,
      procentDzieci: 14.4,
      procentMlodziez: 12.1,
      procentDorosli: 55.7,
      procentEmeryci: 17.8,
      procentMezczyzni: 47.8,
      procentWyksztalcenieWyzsze: 36.0
    },
    {
      nazwa: "Torun",
      koordynatX: 53.0138,
      koordynatY: 18.5984,
      populacja: 196935,
      powierzchnia: 115.75,
      procentDzieci: 14.3,
      procentMlodziez: 12.2,
      procentDorosli: 56.0,
      procentEmeryci: 17.5,
      procentMezczyzni: 48.0,
      procentWyksztalcenieWyzsze: 39.0
    },
    {
      nazwa: "Kielce",
      koordynatX: 50.8661,
      koordynatY: 20.6286,
      populacja: 193415,
      powierzchnia: 109.45,
      procentDzieci: 14.0,
      procentMlodziez: 12.5,
      procentDorosli: 55.9,
      procentEmeryci: 17.6,
      procentMezczyzni: 48.1,
      procentWyksztalcenieWyzsze: 38.7
    },
    {
      nazwa: "Gliwice",
      koordynatX: 50.2945,
      koordynatY: 18.6714,
      populacja: 178603,
      powierzchnia: 134.21,
      procentDzieci: 14.2,
      procentMlodziez: 12.0,
      procentDorosli: 55.6,
      procentEmeryci: 18.2,
      procentMezczyzni: 47.7,
      procentWyksztalcenieWyzsze: 38.2
    },
    {
      nazwa: "Zabrze",
      koordynatX: 50.3249,
      koordynatY: 18.7857,
      populacja: 173374,
      powierzchnia: 80.43,
      procentDzieci: 13.9,
      procentMlodziez: 11.9,
      procentDorosli: 55.2,
      procentEmeryci: 18.0,
      procentMezczyzni: 47.9,
      procentWyksztalcenieWyzsze: 37.0
    },
    {
      nazwa: "Olsztyn",
      koordynatX: 53.7784,
      koordynatY: 20.4801,
      populacja: 172993,
      powierzchnia: 88.33,
      procentDzieci: 14.1,
      procentMlodziez: 12.2,
      procentDorosli: 55.5,
      procentEmeryci: 18.2,
      procentMezczyzni: 47.8,
      procentWyksztalcenieWyzsze: 38.1
    }
  ];
  