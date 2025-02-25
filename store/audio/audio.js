const AUDIO = [
  {
    id: 1,
    title: "Summary of the Meanings of the Qur'an",
    artist: "Shaykh Habib Rauf",
    cover: "/quran.jpg",
    description:
      "Connect yourself with the Holy Qur’an this year. Listen to the verses at night and ponder over their meanings during the day.",
    tracks: [
      {
        id: 1,
        title: "Surah 1 - Al Fatihah (The Opening)",
        // src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ1.m4a",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ1.m4a",
      },
      {
        id: 2,
        title: "Surah 2 - Al Baqarah (The Cow)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ2.m4a",
      },
      {
        id: 3,
        title: "Surah 3 - Aal Imran (The Family of Imran)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ3.m4a",
      },
      {
        id: 4,
        title: "Surah 4 - An Nisa (The Women)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ4.m4a",
      },
      {
        id: 5,
        title: "Surah 5 - Al Ma'idah (The Tablespread)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ5.m4a",
      },
      {
        id: 6,
        title: "Surah 6 - Al An'am (The Cattle)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ6.m4a",
      },
      {
        id: 7,
        title: "Surah 7 - Al A'raf (The Heights)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ7.m4a",
      },
      {
        id: 8,
        title: "Surah 8 - Al Anfal (The Spoils of War)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ8.m4a",
      },
      {
        id: 9,
        title: "Surah 9 - At Tawbah (The Repentance)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ9.m4a",
      },
      {
        id: 10,
        title: "Surah 10 - Yunus (Jonah)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ10.m4a",
      },
      {
        id: 11,
        title: "Surah 11 - Hud",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ11.m4a",
      },
      {
        id: 12,
        title: "Surah 12 - Yusuf (Joseph)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ12.m4a",
      },
      {
        id: 13,
        title: "Surah 13 - Ar Ra'd (The Thunder)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ13.m4a",
      },
      {
        id: 14,
        title: "Surah 14 - Ibrahim (Abraham)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ14.m4a",
      },
      {
        id: 15,
        title: "Surah 15 - Al Hijr (The Rocky Tract)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ15.m4a",
      },
      {
        id: 16,
        title: "Surah 16 - An Nahl (The Bee)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ16.m4a",
      },
      {
        id: 17,
        title: "Surah 17 - Al Isra (The Night Journey)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ17.m4a",
      },
      {
        id: 18,
        title: "Surah 18 - Al Kahf (The Cave)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ18.m4a",
      },
      {
        id: 19,
        title: "Surah 19 - Maryam (Mary)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ19.m4a",
      },
      {
        id: 20,
        title: "Surah 20 - Ta-Ha",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ20.m4a",
      },
      {
        id: 21,
        title: "Surah 21 - Al Anbiya (The Prophets)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ21.m4a",
      },
      {
        id: 22,
        title: "Surah 22 - Al Hajj (The Pilgrimage)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ22.m4a",
      },
      {
        id: 23,
        title: "Surah 23 - Al Mu'minun (The Believers)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ23.m4a",
      },
      {
        id: 24,
        title: "Surah 24 - An Nur (The Light)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ24.m4a",
      },
      {
        id: 25,
        title: "Surah 25 - Al Furqan (The Criterion)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ25.m4a",
      },
      {
        id: 26,
        title: "Surah 26 - Ash Shu'ara (The Poets)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ26.m4a",
      },
      {
        id: 27,
        title: "Surah 27 - An Naml (The Ant)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ27.m4a",
      },
      {
        id: 28,
        title: "Surah 28 - Al Qasas (The Stories)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ28.m4a",
      },
      {
        id: 29,
        title: "Surah 29 - Al Ankabut (The Spider)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ29.m4a",
      },
      {
        id: 30,
        title: "Surah 30 - Ar Rum (The Romans)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ30.m4a",
      },
      {
        id: 31,
        title: "Surah 31 - Luqman",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ31.m4a",
      },
      {
        id: 32,
        title: "Surah 32 - As Sajdah (The Prostration)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ32.m4a",
      },
      {
        id: 33,
        title: "Surah 33 - Al Ahzab (The Combined Forces)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ33.m4a",
      },
      {
        id: 34,
        title: "Surah 34 - Saba' (Sheba)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ34.m4a",
      },
      {
        id: 35,
        title: "Surah 35 - Fatir (Originator)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ35.m4a",
      },
      {
        id: 36,
        title: "Surah 36 - Ya-Sin",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ36.m4a",
      },
      {
        id: 37,
        title: "Surah 37 - As Saffat (Those who set the ranks)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ37.m4a",
      },
      {
        id: 38,
        title: "Surah 38 - Sad",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ38.m4a",
      },
      {
        id: 39,
        title: "Surah 39 - Az Zumar (The Groups)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ39.m4a",
      },
      {
        id: 40,
        title: "Surah 40 - Al Mu'min (The Believer)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ40.m4a",
      },
      {
        id: 41,
        title: "Surah 41 - Fussilat (Explained in Detail)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ41.m4a",
      },
      {
        id: 42,
        title: "Surah 42 - Ash Shura (The Consultation)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ42.m4a",
      },
      {
        id: 43,
        title: "Surah 43 - Az Zukhruf (The Ornaments of Gold)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ43.m4a",
      },
      {
        id: 44,
        title: "Surah 44 - Ad Dukhan (The Smoke)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ44.m4a",
      },
      {
        id: 45,
        title: "Surah 45 - Al Jathiyah (The Crouching)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ45.m4a",
      },
      {
        id: 46,
        title: "Surah 46 - Al Ahqaf (The Wind-Curved Sandhills)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ46.m4a",
      },
      {
        id: 47,
        title: "Surah 47 - Muhammad",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ47.m4a",
      },
      {
        id: 48,
        title: "Surah 48 - Al Fath (The Victory)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ48.m4a",
      },
      {
        id: 49,
        title: "Surah 49 - Al Hujurat (The Dwellings)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ49.m4a",
      },
      {
        id: 50,
        title: "Surah 50 - Qaf",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ50.m4a",
      },
      {
        id: 51,
        title: "Surah 51 - Adh Dhariyat (The Winnowing Winds)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ51.m4a",
      },
      {
        id: 52,
        title: "Surah 52 - At Tur (The Mount)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ52.m4a",
      },
      {
        id: 53,
        title: "Surah 53 - An Najm (The Star)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ53.m4a",
      },
      {
        id: 54,
        title: "Surah 54 - Al Qamar (The Moon)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ54.m4a",
      },
      {
        id: 55,
        title: "Surah 55 - Ar Rahman (The Most Gracious)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ55.m4a",
      },
      {
        id: 56,
        title: "Surah 56 - Al Waqi'ah (The Event)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ56.m4a",
      },
      {
        id: 57,
        title: "Surah 57 - Al Hadid (The Iron)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ57.m4a",
      },
      {
        id: 58,
        title: "Surah 58 - Al Mujadila (The Pleading Woman)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ58.m4a",
      },
      {
        id: 59,
        title: "Surah 59 - Al Hashr (The Gathering)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ59.m4a",
      },
      {
        id: 60,
        title: "Surah 60 - Al Mumtahanah (The Woman to be Examined)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ60.m4a",
      },
      {
        id: 61,
        title: "Surah 61 - As Saff (The Row)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ61.m4a",
      },
      {
        id: 62,
        title: "Surah 62 - Al Jumu'ah (Friday)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ62.m4a",
      },
      {
        id: 63,
        title: "Surah 63 - Al Munafiqun (The Hypocrites)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ63.m4a",
      },
      {
        id: 64,
        title: "Surah 64 - At Taghabun (The Loss and Gain)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ64.m4a",
      },
      {
        id: 65,
        title: "Surah 65 - At Talaq (The Divorce)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ65.m4a",
      },
      {
        id: 66,
        title: "Surah 66 - At Tahrim (The Prohibition)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ66.m4a",
      },
      {
        id: 67,
        title: "Surah 67 - Al Mulk (The Dominion)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ67.m4a",
      },
      {
        id: 68,
        title: "Surah 68 - Al Qalam (The Pen)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ68.m4a",
      },
      {
        id: 69,
        title: "Surah 69 - Al Haqqah (The Inevitable)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ69.m4a",
      },
      {
        id: 70,
        title: "Surah 70 - Al Ma'arij (The Ascending Stairways)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ70.m4a",
      },
      {
        id: 71,
        title: "Surah 71 - Nuh (Noah)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ71.m4a",
      },
      {
        id: 72,
        title: "Surah 72 - Al Jinn (The Jinn)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ72.m4a",
      },
      {
        id: 73,
        title: "Surah 73 - Al Muzzammil (The Enshrouded One)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ73.m4a",
      },
      {
        id: 74,
        title: "Surah 74 - Al Muddaththir (The Cloaked One)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ74.m4a",
      },
      {
        id: 75,
        title: "Surah 75 - Al Qiyamah (The Resurrection)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ75.m4a",
      },
      {
        id: 76,
        title: "Surah 76 - Al Insan (The Man)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ76.m4a",
      },
      {
        id: 77,
        title: "Surah 77 - Al Mursalat (Those Sent Forth)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ77.m4a",
      },
      {
        id: 78,
        title: "Surah 78 - An Naba' (The Great News)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ78.m4a",
      },
      {
        id: 79,
        title: "Surah 79 - An Nazi'at (Those Who Pull Out)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ79.m4a",
      },
      {
        id: 80,
        title: "Surah 80 - Abasa (He Frowned)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ80.m4a",
      },
      {
        id: 81,
        title: "Surah 81 - At Takwir (The Overthrowing)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ81.m4a",
      },
      {
        id: 82,
        title: "Surah 82 - Al Infitar (The Cleaving Asunder)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ82.m4a",
      },
      {
        id: 83,
        title: "Surah 83 - Al Mutaffifin (Those Who Deal in Fraud)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ83.m4a",
      },
      {
        id: 84,
        title: "Surah 84 - Al Inshiqaq (The Bursting Asunder)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ84.m4a",
      },
      {
        id: 85,
        title: "Surah 85 - Al Buruj (The Constellations)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ85.m4a",
      },
      {
        id: 86,
        title: "Surah 86 - At Tariq (The Nightcomer)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ86.m4a",
      },
      {
        id: 87,
        title: "Surah 87 - Al A'la (The Most High)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ87.m4a",
      },
      {
        id: 88,
        title: "Surah 88 - Al Ghashiyah (The Overwhelming)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ88.m4a",
      },
      {
        id: 89,
        title: "Surah 89 - Al Fajr (The Dawn)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ89.m4a",
      },
      {
        id: 90,
        title: "Surah 90 - Al Balad (The City)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ90.m4a",
      },
      {
        id: 91,
        title: "Surah 91 - Ash Shams (The Sun)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ91.m4a",
      },
      {
        id: 92,
        title: "Surah 92 - Al Lail (The Night)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ92.m4a",
      },
      {
        id: 93,
        title: "Surah 93 - Ad Duha (The Forenoon)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ93.m4a",
      },
      {
        id: 94,
        title: "Surah 94 - Ash Sharh (The Relief)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ94.m4a",
      },
      {
        id: 95,
        title: "Surah 95 - At Tin (The Fig)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ95.m4a",
      },
      {
        id: 96,
        title: "Surah 96 - Al Alaq (The Clot)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ96.m4a",
      },
      {
        id: 97,
        title: "Surah 97 - Al Qadr (The Night of Decree)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ97.m4a",
      },
      {
        id: 98,
        title: "Surah 98 - Al Bayyinah (The Clear Proof)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ98.m4a",
      },
      {
        id: 99,
        title: "Surah 99 - Az Zalzalah (The Earthquake)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ99.m4a",
      },
      {
        id: 100,
        title: "Surah 100 - Al Adiyat (Those Courser)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ100.m4a",
      },
      {
        id: 101,
        title: "Surah 101 - Al Qari'ah (The Striking Hour)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ101.m4a",
      },
      {
        id: 102,
        title: "Surah 102 - At Takathur (The Piling Up)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ102.m4a",
      },
      {
        id: 103,
        title: "Surah 103 - Al Asr (The Time)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ103.m4a",
      },
      {
        id: 104,
        title: "Surah 104 - Al Humazah (The Slanderer)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ104.m4a",
      },
      {
        id: 105,
        title: "Surah 105 - Al Fil (The Elephant)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ105.m4a",
      },
      {
        id: 106,
        title: "Surah 106 - Quraysh",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ106.m4a",
      },
      {
        id: 107,
        title: "Surah 107 - Al Ma'un (The Small Kindnesses)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ107.m4a",
      },
      {
        id: 108,
        title: "Surah 108 - Al Kawthar (The Abundance)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ108.m4a",
      },
      {
        id: 109,
        title: "Surah 109 - Al Kafirun (The Disbelievers)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ109.m4a",
      },
      {
        id: 110,
        title: "Surah 110 - An Nasr (The Help)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ110.m4a",
      },
      {
        id: 111,
        title: "Surah 111 - Al Masad (The Palm Fiber)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ111.m4a",
      },
      {
        id: 112,
        title: "Surah 112 - Al Ikhlas (The Sincerity)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ112.m4a",
      },
      {
        id: 113,
        title: "Surah 113 - Al Falaq (The Daybreak)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ113.m4a",
      },
      {
        id: 114,
        title: "Surah 114 - An Nas (Mankind)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ114.m4a",
      },
    ],
  },
  // {
  //   id: 2,
  //   title: "Audio Lectures",
  //   artist: "Shaykh Habib Rauf",
  //   cover: "https://almasjid-site.s3.eu-north-1.amazonaws.com/reminders.jpg",
  //   tracks: [
  //     {
  //       id: 1,
  //       title: "Track 1",
  //       src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ114.m4a",
  //     },
  //   ],
  // },
  {
    id: 3,
    title: "Stories of the Prophets",
    artist: "Al Masjid",
    description:
      "Learn about the stories of the chosen men who were sent by Allah ﷻ and the lessons that can be learnt from their lives. This playlist is designed for children.",

    cover:
      "https://almasjid-site.s3.eu-north-1.amazonaws.com/stories-prophets.jpg",
    tracks: [
      {
        id: 1,
        title: "Adam (AS) Part 1",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/Adam(AS)Part1.m4a",
      },
      {
        id: 2,
        title: "Adam (AS) Part 2",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/Adam(AS)Part2.m4a",
      },
      {
        id: 3,
        title: "Ibrahim (AS) Part 1",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/Ibrahim(AS)Part1.m4a",
      },
      {
        id: 4,
        title: "Ibrahim (AS) Part 2",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/Ibrahim(AS)Part2.m4a",
      },
      {
        id: 5,
        title: "Ibrahim (AS) Part 3",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/Ibrahim(AS)Part3.m4a",
      },
      {
        id: 6,
        title: "Ibrahim (AS) Part 4",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/Ibrahim(AS)Part4.m4a",
      },
      {
        id: 7,
        title: "Ibrahim (AS) Part 5",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/Ibrahim(AS)Part5.m4a",
      },
      {
        id: 8,
        title: "Isa (AS) Part 1",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/Isa(AS)Part1.m4a",
      },
      {
        id: 9,
        title: "Isa (AS) Part 2",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/Isa(AS)Part2.m4a",
      },
      {
        id: 10,
        title: "Musa (AS) Part 1",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/Musa(AS)Part1.m4a",
      },
      {
        id: 11,
        title: "Musa (AS) Part 2",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/Musa(AS)Part2.m4a",
      },
      {
        id: 12,
        title: "Nuh (AS)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/Nuh(AS).m4a",
      },
      {
        id: 13,
        title: "Prophet Muhammad (PBUH) Part 1",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/ProphetMuhammadPBUHPart1.m4a",
      },
      {
        id: 14,
        title: "Prophet Muhammad (PBUH) Part 2",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/ProphetMuhammadPBUHPart2.m4a",
      },
      {
        id: 15,
        title: "Prophet Muhammad (PBUH) Part 3",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/ProphetMuhammadPBUHPart3.m4a",
      },
      {
        id: 16,
        title: "Prophet Muhammad (PBUH) Part 4",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/ProphetMuhammadPBUHPart4.m4a",
      },
      {
        id: 17,
        title: "Prophet Muhammad (PBUH) Part 5",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/ProphetMuhammadPBUHPart5.m4a",
      },
      {
        id: 18,
        title: "Prophet Muhammad (PBUH) Part 6",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/ProphetMuhammadPBUHPart6.m4a",
      },
      {
        id: 19,
        title: "Yunus (AS) Part 1",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/Yunus(AS)Part1.m4a",
      },
      {
        id: 20,
        title: "Yunus (AS) Part 2",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/Yunus(AS)Part2.m4a",
      },
    ],
  },
  // {
  //   id: 4,
  //   title: "Ramadhan Reminders",
  //   artist: "Dr. Nasser Rashid",
  //   cover: "https://almasjid-site.s3.eu-north-1.amazonaws.com/lectures.jpg",
  //   tracks: [
  //     {
  //       id: 1,
  //       title: "Track 1",
  //       src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/SMQ114.mp3",
  //     },
  //   ],
  // },
  {
    id: 5,
    title: "Connecting with the Qur'an Series",
    artist: "Dr. Nasser Rashid",
    cover:
      "https://almasjid-site.s3.eu-north-1.amazonaws.com/tajweed-series.jpg",
    tracks: [
      {
        id: 1,
        title: "Hidayah (Guidance)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/01.m4a",
      },
      {
        id: 2,
        title: "The Greatest Verse of the Qur'an",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/02.m4a",
      },
      {
        id: 3,
        title: "Taqwa",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/03.m4a",
      },
      {
        id: 4,
        title: "Day 4 Reminder - Assisting in Righteousness & Taqwa",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/04.m4a",
      },
      {
        id: 5,
        title: "The Mercy of Allah & Tawbah (Repentance)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/05.m4a",
      },
      {
        id: 6,
        title: "5 Traits of a True Mu'min",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/06.m4a",
      },
      {
        id: 7,
        title: "The Obligation of Seeking Religious Knowledge",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/07.m4a",
      },
      {
        id: 8,
        title: "Istiqamah (Steadfastness)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/08.m4a",
      },
      {
        id: 9,
        title: "Sabr & Shukr (Patience & Gratefulness)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/09.m4a",
      },
      {
        id: 10,
        title:
          "The Most Comprehensive Verse of The Qurān - The Three Do's & Three Don'ts",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/10.m4a",
      },
      {
        id: 11,
        title: "The Quran on Dealing with Parents",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/11.m4a",
      },
      {
        id: 12,
        title: "Two Great Qualities of the Prophet Isma'eel AS",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/12.m4a",
      },
      {
        id: 13,
        title: "Every Soul Shall Taste Death",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/13.m4a",
      },
      {
        id: 14,
        title: "Facilitating Nikah for The Unmarried",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/14.m4a",
      },
      {
        id: 15,
        title: "I wish I hadn't taken him as a friend!",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/15.m4a",
      },
      {
        id: 16,
        title: "The Acceptance of Du'aa",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/16.m4a",
      },
      {
        id: 17,
        title: "Marriage- The Relationship of Love & Kindness",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/17.m4a",
      },
      {
        id: 18,
        title: "How to Maintain a State of Dhikr (Remembrance of Allah)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/18.m4a",
      },
      {
        id: 20,
        title: "Between Fear & Hope",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/20.m4a",
      },
      {
        id: 21,
        title: "Making Decisions - Istikharah & Istisharah",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/21.m4a",
      },
      {
        id: 22,
        title: "Night of Qadr",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/22.m4a",
      },
      {
        id: 23,
        title: "The Importance of Adab",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/23.m4a",
      },
      {
        id: 24,
        title: "The Three Groups on The Day of Qiyamah",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/24.m4a",
      },
      {
        id: 25,
        title: "The Delusion of The Dunya",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/25.m4a",
      },
      {
        id: 26,
        title: "Save Your Family from Hellfire",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/26.m4a",
      },
      {
        id: 27,
        title: "Life & Death As A Test",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/27.m4a",
      },
      {
        id: 28,
        title: "Jannati Traits - Entering Jannah Through Subduing The Nafs",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/28.m4a",
      },
      {
        id: 29,
        title: "The Value of Time & 4 Principles to Become a Winner",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/m4a/29.m4a",
      },
    ],
  },
];

export default AUDIO;
