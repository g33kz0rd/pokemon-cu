import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonModule } from './pokemon/pokemon.module';
import { Pokemon } from './pokemon/entities/pokemon.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'pokemon-cu-gik-pokemon-cu-gik.d.aivencloud.com',
      port: 27365,
      ssl: {
        rejectUnauthorized: true,
        ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUdo8vdY/mNvuKouFJNiQA6G0BY2cwDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvMTAzYmM1NGYtYmUxMS00ODJlLWI2NjEtMGQ5ZWI3Y2Ey
M2UyIFByb2plY3QgQ0EwHhcNMjQwOTAxMDQzNDEwWhcNMzQwODMwMDQzNDEwWjA6
MTgwNgYDVQQDDC8xMDNiYzU0Zi1iZTExLTQ4MmUtYjY2MS0wZDllYjdjYTIzZTIg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAMszmdea
nvQmcUlZ+rzeoDaceKvTsnJcHXO7b7IoXO4yRIzKrJkEeVCvS0M1SBJrxWx8OA3J
n1enp3K1CdmSdHMhRElds2CWhQKAyldO5UErNIuJMDspTL9cmhcBMn0TfB6e0Ojs
6l56+xFhhlGKh/uq3y5fYJ4++FEE6Dcwqk/FK5dYpFnk463w6Ad7AnVyS1RDILBj
Xk64ZKPYZG/iuTiVXI1NxWJreIa5olNShqCgg2DSR8KjMynGWJPt2fwtA5Kx9Pc9
M1ao+rM3r8s8m+Qd/ujsvRdVW7ifl+tP2LZ+t6ROE2i3+dunMqaVKRAfcTfRW2UJ
G1CcUM/0ynVk3Ljoa1lKf6DHkfnlP1GL3osYFk3PsVOeFRNuelG35C+6XkRbOqs4
ZQUgcaz63fXcQ41cm6bXjiMXb2BYLNucoF1pEPNzo1538IMMTXSDV5kycqjJI/G1
gwHR2Jk4OXksBtsOGb2riLmU/Z09yx1quO2gLe32pClJUBoZ4RHvijYg6wIDAQAB
oz8wPTAdBgNVHQ4EFgQUM4sWGWttNYO5mMCS0ovEzKKWol8wDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAB6R/VGvSIgU3WXn
O48oZkIcyyDUvckaWtEeKPr9zMxCRYdlY4IlyqIoaRYIWPc9n/rhp0GaO3p3kO1l
6jck0AZ3wRCP6WMtrUpSNWCbsDh4rgWF6hZk01Lnn9LozXWZYRs9cs0nzFWaUPaR
Tr/Jkmhkyw9Ce2aQcKS/xZwZyqLqJJBEsTYx0qz6wRgx62h8uoPWo7g+s4ywa0i6
E7lEIoRcUz+WW7wl4BaSZSWbCJ7MgBwreK25+5uuKwc8dpE1kEDekz+jlIu/6lXG
sYYhaTW+YceW1xVG3ebok9q5enMazKOqEkxgYPBwJnsqOwZzqmL5YpllgWodb+kz
/dvLNsQnj31Hwlyr6Bbs8jIdr5KX/FZJlkb/E5ceyhek3LAjxnjr9PyDFUNI9y8n
7d9Ay/Pz8cdxOKdKpQyg//oRlwMjEAdjqIv15XtdHyNgomUBEOqKMbWNheLv7XBF
zMoGchc3yIDYYS1j45sKVBl7R83Yfi4fIHs2lJNho1o3JsFpaw==
-----END CERTIFICATE-----`,
      },
      password: 'AVNS_atqh7vlFqhnSQvs2jUI',
      username: 'avnadmin',
      entities: [Pokemon],
      database: 'defaultdb',
      synchronize: true,
      logging: true,
    }),
    PokemonModule,
  ],
})
export class AppModule {}
