export type NonceSignature = {
  nonce: number;
  rand: string;
  sig: string;
  pubKeyIndex: number;
};

export const nonceSignatures: Record<string, NonceSignature> = {
  0: {
    nonce: 12,
    rand: "2ECE8845C4114D80DCCF8E911E2FD586BF9E1106650F8B55C0AC55D6",
    sig: "30440220041AA41A2D8E6384EE5DF70CC0AD6713F9236C9C97E222939B73D9673377FD6C0220015F084155ABC57BA4176C1F39A0952F47110C45D78387AF5603529D58C7CB960407",
    pubKeyIndex: 0,
  },
  1: {
    nonce: 13,
    rand: "F8D06C26B7FE3598D827D6B91535766B1F4909B8B9174E60A63EE6E6",
    sig: "3044022005DBAA155224C52E2B9CBB965D07E25AFF7E4A0589DFEECA55F0DD34035A4B9F0220045B9D859FEADA70F9015CB60C57E5BD6CCC6F705BBC7471B522C18C4949FA8E0407",
    pubKeyIndex: 0,
  },
  2: {
    nonce: 14,
    rand: "17B86CC70F389D4C5BFA44B871F16BCC76521201DF1A69FC10DCE9A6",
    sig: "30440220020CF4AA0C8A2EE10C41016A6069E3604B1F8487C8C6EE95954F5E15E00128200220041576E3149B4CCA5F281B56122100877BEBCDD3F8338DCD574CBC1447CFB3E60407",
    pubKeyIndex: 0,
  },
  3: {
    nonce: 1,
    rand: "F4C295A990520C0752458BCF1325FCAA163AABBD3D3593DD0A0021ED",
    sig: "3044022002A087703F291A4180CF72655F7E23A31B351EBD2596CFA0FFE4AD892047B773022002216EAA73F7A159D63F35FFB0F9AF9F249E88EB9C271106F4B41AC16460D9010409",
    pubKeyIndex: 1,
  },
  4: {
    nonce: 2,
    rand: "23BA6C027D8980C0F6F72D1F91660FA57D7C09D7DBEA000BF4727842",
    sig: "3044022005B723A4E98840B387A3FE33A2F6C31E746CC00C4E8B260AF6BC8D014C11462B02200287CBFF41C066D3094CBD33C7F03594BD87298FC80B739B5D0F245F530F30060409",
    pubKeyIndex: 1,
  },
  5: {
    nonce: 3,
    rand: "CB62FA3C9E5772DEDE937C0CB63006118D7F90FEDC73DB84F626796A",
    sig: "3044022005B66AFC1CC0ECFAEA261F03E4561AC2ACCC848EA20091344A6782620335FE1402200213C98E5FED563603A545163229274E86A646176ACF18C75361764B884E92940409",
    pubKeyIndex: 1,
  },
};