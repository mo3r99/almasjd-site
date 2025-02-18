const AUDIO = [
  {
    id: 1,
    title: "Summary of the Meanings of the Qur'an",
    aritist: "Shaykh Habib Rauf",
    cover: "/quran.jpg",
    description:
      "Connect yourself with the Holy Qur’an this year. Listen to the verses at night and ponder over their meanings during the day.",
    tracks: [
      {
        id: 1,
        title: "Surah 1 - Al Fatihah (The Opening)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ1.mp3",
      },
      {
        id: 2,
        title: "Surah 2 - Al Baqarah (The Cow)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ2.mp3",
      },
      {
        id: 3,
        title: "Surah 3 - Aal Imran (The Family of Imran)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ3.mp3",
      },
      {
        id: 4,
        title: "Surah 4 - An Nisa (The Women)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ4.mp3",
      },
      {
        id: 5,
        title: "Surah 5 - Al Ma'idah (The Tablespread)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ5.mp3",
      },
      {
        id: 6,
        title: "Surah 6 - Al An'am (The Cattle)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ6.mp3",
      },
      {
        id: 7,
        title: "Surah 7 - Al A'raf (The Heights)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ7.mp3",
      },
      {
        id: 8,
        title: "Surah 8 - Al Anfal (The Spoils of War)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ8.mp3",
      },
      {
        id: 9,
        title: "Surah 9 - At Tawbah (The Repentance)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ9.mp3",
      },
      {
        id: 10,
        title: "Surah 10 - Yunus (Jonah)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ10.mp3",
      },
      {
        id: 11,
        title: "Surah 11 - Hud",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ11.mp3",
      },
      {
        id: 12,
        title: "Surah 12 - Yusuf (Joseph)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ12.mp3",
      },
      {
        id: 13,
        title: "Surah 13 - Ar Ra'd (The Thunder)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ13.mp3",
      },
      {
        id: 14,
        title: "Surah 14 - Ibrahim (Abraham)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ14.mp3",
      },
      {
        id: 15,
        title: "Surah 15 - Al Hijr (The Rocky Tract)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ15.mp3",
      },
      {
        id: 16,
        title: "Surah 16 - An Nahl (The Bee)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ16.mp3",
      },
      {
        id: 17,
        title: "Surah 17 - Al Isra (The Night Journey)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ17.mp3",
      },
      {
        id: 18,
        title: "Surah 18 - Al Kahf (The Cave)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ18.mp3",
      },
      {
        id: 19,
        title: "Surah 19 - Maryam (Mary)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ19.mp3",
      },
      {
        id: 20,
        title: "Surah 20 - Ta-Ha",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ20.mp3",
      },
      {
        id: 21,
        title: "Surah 21 - Al Anbiya (The Prophets)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ21.mp3",
      },
      {
        id: 22,
        title: "Surah 22 - Al Hajj (The Pilgrimage)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ22.mp3",
      },
      {
        id: 23,
        title: "Surah 23 - Al Mu'minun (The Believers)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ23.mp3",
      },
      {
        id: 24,
        title: "Surah 24 - An Nur (The Light)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ24.mp3",
      },
      {
        id: 25,
        title: "Surah 25 - Al Furqan (The Criterion)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ25.mp3",
      },
      {
        id: 26,
        title: "Surah 26 - Ash Shu'ara (The Poets)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ26.mp3",
      },
      {
        id: 27,
        title: "Surah 27 - An Naml (The Ant)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ27.mp3",
      },
      {
        id: 28,
        title: "Surah 28 - Al Qasas (The Stories)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ28.mp3",
      },
      {
        id: 29,
        title: "Surah 29 - Al Ankabut (The Spider)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ29.mp3",
      },
      {
        id: 30,
        title: "Surah 30 - Ar Rum (The Romans)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ30.mp3",
      },
      {
        id: 31,
        title: "Surah 31 - Luqman",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ31.mp3",
      },
      {
        id: 32,
        title: "Surah 32 - As Sajdah (The Prostration)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ32.mp3",
      },
      {
        id: 33,
        title: "Surah 33 - Al Ahzab (The Combined Forces)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ33.mp3",
      },
      {
        id: 34,
        title: "Surah 34 - Saba' (Sheba)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ34.mp3",
      },
      {
        id: 35,
        title: "Surah 35 - Fatir (Originator)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ35.mp3",
      },
      {
        id: 36,
        title: "Surah 36 - Ya-Sin",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ36.mp3",
      },
      {
        id: 37,
        title: "Surah 37 - As Saffat (Those who set the ranks)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ37.mp3",
      },
      {
        id: 38,
        title: "Surah 38 - Sad",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ38.mp3",
      },
      {
        id: 39,
        title: "Surah 39 - Az Zumar (The Groups)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ39.mp3",
      },
      {
        id: 40,
        title: "Surah 40 - Ghafir (The Forgiver)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ40.mp3",
      },
      {
        id: 41,
        title: "Surah 41 - Fussilat (Explained in Detail)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ41.mp3",
      },
      {
        id: 42,
        title: "Surah 42 - Ash Shura (The Consultation)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ42.mp3",
      },
      {
        id: 43,
        title: "Surah 43 - Az Zukhruf (The Ornaments of Gold)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ43.mp3",
      },
      {
        id: 44,
        title: "Surah 44 - Ad Dukhan (The Smoke)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ44.mp3",
      },
      {
        id: 45,
        title: "Surah 45 - Al Jathiyah (The Crouching)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ45.mp3",
      },
      {
        id: 46,
        title: "Surah 46 - Al Ahqaf (The Wind-Curved Sandhills)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ46.mp3",
      },
      {
        id: 47,
        title: "Surah 47 - Muhammad",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ47.mp3",
      },
      {
        id: 48,
        title: "Surah 48 - Al Fath (The Victory)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ48.mp3",
      },
      {
        id: 49,
        title: "Surah 49 - Al Hujurat (The Dwellings)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ49.mp3",
      },
      {
        id: 50,
        title: "Surah 50 - Qaf",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ50.mp3",
      },
      {
        id: 51,
        title: "Surah 51 - Adh Dhariyat (The Winnowing Winds)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ51.mp3",
      },
      {
        id: 52,
        title: "Surah 52 - At Tur (The Mount)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ52.mp3",
      },
      {
        id: 53,
        title: "Surah 53 - An Najm (The Star)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ53.mp3",
      },
      {
        id: 54,
        title: "Surah 54 - Al Qamar (The Moon)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ54.mp3",
      },
      {
        id: 55,
        title: "Surah 55 - Ar Rahman (The Most Gracious)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ55.mp3",
      },
      {
        id: 56,
        title: "Surah 56 - Al Waqi'ah (The Event)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ56.mp3",
      },
      {
        id: 57,
        title: "Surah 57 - Al Hadid (The Iron)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ57.mp3",
      },
      {
        id: 58,
        title: "Surah 58 - Al Mujadila (The Pleading Woman)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ58.mp3",
      },
      {
        id: 59,
        title: "Surah 59 - Al Hashr (The Gathering)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ59.mp3",
      },
      {
        id: 60,
        title: "Surah 60 - Al Mumtahanah (The Woman to be Examined)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ60.mp3",
      },
      {
        id: 61,
        title: "Surah 61 - As Saff (The Row)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ61.mp3",
      },
      {
        id: 62,
        title: "Surah 62 - Al Jumu'ah (Friday)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ62.mp3",
      },
      {
        id: 63,
        title: "Surah 63 - Al Munafiqun (The Hypocrites)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ63.mp3",
      },
      {
        id: 64,
        title: "Surah 64 - At Taghabun (The Loss and Gain)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ64.mp3",
      },
      {
        id: 65,
        title: "Surah 65 - At Talaq (The Divorce)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ65.mp3",
      },
      {
        id: 66,
        title: "Surah 66 - At Tahrim (The Prohibition)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ66.mp3",
      },
      {
        id: 67,
        title: "Surah 67 - Al Mulk (The Dominion)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ67.mp3",
      },
      {
        id: 68,
        title: "Surah 68 - Al Qalam (The Pen)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ68.mp3",
      },
      {
        id: 69,
        title: "Surah 69 - Al Haqqah (The Inevitable)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ69.mp3",
      },
      {
        id: 70,
        title: "Surah 70 - Al Ma'arij (The Ascending Stairways)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ70.mp3",
      },
      {
        id: 71,
        title: "Surah 71 - Nuh (Noah)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ71.mp3",
      },
      {
        id: 72,
        title: "Surah 72 - Al Jinn (The Jinn)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ72.mp3",
      },
      {
        id: 73,
        title: "Surah 73 - Al Muzzammil (The Enshrouded One)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ73.mp3",
      },
      {
        id: 74,
        title: "Surah 74 - Al Muddaththir (The Cloaked One)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ74.mp3",
      },
      {
        id: 75,
        title: "Surah 75 - Al Qiyamah (The Resurrection)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ75.mp3",
      },
      {
        id: 76,
        title: "Surah 76 - Al Insan (The Man)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ76.mp3",
      },
      {
        id: 77,
        title: "Surah 77 - Al Mursalat (Those Sent Forth)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ77.mp3",
      },
      {
        id: 78,
        title: "Surah 78 - An Naba' (The Great News)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ78.mp3",
      },
      {
        id: 79,
        title: "Surah 79 - An Nazi'at (Those Who Pull Out)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ79.mp3",
      },
      {
        id: 80,
        title: "Surah 80 - Abasa (He Frowned)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ80.mp3",
      },
      {
        id: 81,
        title: "Surah 81 - At Takwir (The Overthrowing)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ81.mp3",
      },
      {
        id: 82,
        title: "Surah 82 - Al Infitar (The Cleaving Asunder)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ82.mp3",
      },
      {
        id: 83,
        title: "Surah 83 - Al Mutaffifin (Those Who Deal in Fraud)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ83.mp3",
      },
      {
        id: 84,
        title: "Surah 84 - Al Inshiqaq (The Bursting Asunder)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ84.mp3",
      },
      {
        id: 85,
        title: "Surah 85 - Al Buruj (The Constellations)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ85.mp3",
      },
      {
        id: 86,
        title: "Surah 86 - At Tariq (The Nightcomer)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ86.mp3",
      },
      {
        id: 87,
        title: "Surah 87 - Al A'la (The Most High)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ87.mp3",
      },
      {
        id: 88,
        title: "Surah 88 - Al Ghashiyah (The Overwhelming)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ88.mp3",
      },
      {
        id: 89,
        title: "Surah 89 - Al Fajr (The Dawn)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ89.mp3",
      },
      {
        id: 90,
        title: "Surah 90 - Al Balad (The City)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ90.mp3",
      },
      {
        id: 91,
        title: "Surah 91 - Ash Shams (The Sun)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ91.mp3",
      },
      {
        id: 92,
        title: "Surah 92 - Al Lail (The Night)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ92.mp3",
      },
      {
        id: 93,
        title: "Surah 93 - Ad Duha (The Forenoon)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ93.mp3",
      },
      {
        id: 94,
        title: "Surah 94 - Ash Sharh (The Relief)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ94.mp3",
      },
      {
        id: 95,
        title: "Surah 95 - At Tin (The Fig)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ95.mp3",
      },
      {
        id: 96,
        title: "Surah 96 - Al Alaq (The Clot)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ96.mp3",
      },
      {
        id: 97,
        title: "Surah 97 - Al Qadr (The Night of Decree)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ97.mp3",
      },
      {
        id: 98,
        title: "Surah 98 - Al Bayyinah (The Clear Proof)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ98.mp3",
      },
      {
        id: 99,
        title: "Surah 99 - Az Zalzalah (The Earthquake)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ99.mp3",
      },
      {
        id: 100,
        title: "Surah 100 - Al Adiyat (Those Courser)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ100.mp3",
      },
      {
        id: 101,
        title: "Surah 101 - Al Qari'ah (The Striking Hour)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ101.mp3",
      },
      {
        id: 102,
        title: "Surah 102 - At Takathur (The Piling Up)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ102.mp3",
      },
      {
        id: 103,
        title: "Surah 103 - Al Asr (The Time)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ103.mp3",
      },
      {
        id: 104,
        title: "Surah 104 - Al Humazah (The Slanderer)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ104.mp3",
      },
      {
        id: 105,
        title: "Surah 105 - Al Fil (The Elephant)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ105.mp3",
      },
      {
        id: 106,
        title: "Surah 106 - Quraysh",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ106.mp3",
      },
      {
        id: 107,
        title: "Surah 107 - Al Ma'un (The Small Kindnesses)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ107.mp3",
      },
      {
        id: 108,
        title: "Surah 108 - Al Kawthar (The Abundance)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ108.mp3",
      },
      {
        id: 109,
        title: "Surah 109 - Al Kafirun (The Disbelievers)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ109.mp3",
      },
      {
        id: 110,
        title: "Surah 110 - An Nasr (The Help)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ110.mp3",
      },
      {
        id: 111,
        title: "Surah 111 - Al Masad (The Palm Fiber)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ111.mp3",
      },
      {
        id: 112,
        title: "Surah 112 - Al Ikhlas (The Sincerity)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ112.mp3",
      },
      {
        id: 113,
        title: "Surah 113 - Al Falaq (The Daybreak)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ113.mp3",
      },
      {
        id: 114,
        title: "Surah 114 - An Nas (Mankind)",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ114.mp3",
      },
    ],
  },
  {
    id: 2,
    title: "Audio Lectures",
    aritist: "Shaykh Habib Rauf",
    cover: "https://almasjid-site.s3.eu-north-1.amazonaws.com/reminders.jpg",
    tracks: [
      {
        id: 1,
        title: "Track 1",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ114.mp3",
      },
    ],
  },
  {
    id: 3,
    title: "Stories of the Prophets",
    aritist: "Al Masjid",
    cover:
      "https://almasjid-site.s3.eu-north-1.amazonaws.com/stories-prophets.jpg",
    tracks: [
      {
        id: 1,
        title: "Track 1",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ114.mp3",
      },
    ],
  },
  {
    id: 4,
    title: "Ramadhan Reminders",
    aritist: "Dr. Nasser Rashid",
    cover: "https://almasjid-site.s3.eu-north-1.amazonaws.com/lectures.jpg",
    tracks: [
      {
        id: 1,
        title: "Track 1",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ114.mp3",
      },
    ],
  },
  {
    id: 5,
    title: "Tajweed Series",
    aritist: "Mufti Qari Nabeel",
    cover:
      "https://almasjid-site.s3.eu-north-1.amazonaws.com/tajweed-series.jpg",
    tracks: [
      {
        id: 1,
        title: "Track 1",
        src: "https://almasjid-site.s3.eu-north-1.amazonaws.com/SMQ114.mp3",
      },
    ],
  },
];

export default AUDIO;
