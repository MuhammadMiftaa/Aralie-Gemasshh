/* eslint-disable react-hooks/rules-of-hooks */
import { FlipWords } from "@/components/ui/flip-words";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

export default function index() {
  const words = ["Aralie", "Ayayie", "Ci Alie", "Abi"];
  const text =
    'aku bingung harus mulai darimana, tapi yang pertama aku ingin berterima kasih untuk segalanya, mungkin terasa lebay tapi percayalah keberadaan kamu disini adalah alasan aku untuk terus mendukung grup ini. Semenjak oshiku udah ngga disini, Hasrat untuk melanjutkan idoling ini menjadi terasa hambar, ada 50+ lebih member tapi gaada satupun yang click. Sampe akhirnya gen 12 shonichi setlist Aitakatta... di unit song Shounan akhirnya aku pertama kali ngeliat kamu perform dan ngebawain US Shounan dengan suara kamu yang inndaaahhh banget. Saat itu aku langsung terbenak dihati "akhirnya ada lagi member dengan suara sekeren ini". Dan sejak itu aku semakin ngepoin kegiatan-kegiatan dan live kamu. Sifat kamu yang lembut, sopan, dan malu-malu itu ngebuat aku menjadi semakin asdfghjkl. Dan inilah yang akhirnya ngebuat aku semangat buat ngidol lagi, semangat buat terus dukung kamu dan grup ini, semangat buat liat kamu untuk terus berproses, semangat buat aku terus nungguin update dari kamu, semangat buat nungguin momen kamu untuk nyanyi lagi. Dan aku percaya kamu adalah member yang bisa dipercaya. Kamu adalah orang yang baik. Aku bisa bilang itu setelah mendengar cerita-cerita kamu. Kamu rela menyempatkan waktu untuk update di sela-sela kegiatan sekolah. Dan yang paling aku inget itu Waktu kamu jadi panitia mpls wkwkwk. Ngedengerin cerita Waktu ngejagain adik-adik jadi bring back memories Waktu aku juga masih mpls. Gatau kenapa aku jadi ngebayangin balik ke mpls lagi  dan dijagain sama kakak osis yang canggung ini. Tapi apadaya aku lahir 5 tahun kecepetan hehe. Semangat berproses ya adikkk, jalan kamu disini masih panjang, teruslah menjadi orang yang baikkk, orang yang sweet yang kadang masih ngeselin wkwk, orang yang lucu dan semakin lucu kalo cerita berasa ngerap wkwkwk. Aku akan setia melihat proses-proses kamu, dan aku berjanji ke diri aku sendiri aku akan terus dukung grup selama kamu juga masih bertahan di grup ini. Dan terakhir Happy 16th birthday adikkuuuuu.......';

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioRef.current) {
        audioRef.current.play();
      }
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
    };

    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("touchstart", handleUserInteraction);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
    };
  }, []);

  return (
    <>
      <audio autoPlay>
        <source src="/backsong.mp3" type="audio/mp3" />
      </audio>
      <div className="font-urbanist relative bg-[#F7EBED] h-[100vh] flex w-screen text-pink-950">
        <h1 className="text-3xl font-semibold inline-block self-center w-full text-center">
          Hello
          <FlipWords className="text-inherit" words={words} /> <br />
        </h1>
        <h2 className="absolute bottom-10 w-full text-center">
          #Apre21Oshi disini 👇
        </h2>
        <Image
          className="absolute top-7 left-7 animate-spin duration-5000"
          src="/img1.png"
          width={80}
          height={80}
          alt="1"
        />
        <Image
          className="absolute top-7 right-7 animate-spin duration-5000 delay-100"
          src="/img2.png"
          width={80}
          height={80}
          alt="1"
        />
        <Image
          className="absolute bottom-7 left-7 animate-spin duration-5000 delay-200"
          src="/img3.png"
          width={80}
          height={80}
          alt="1"
        />
        <Image
          className="absolute bottom-7 right-7 animate-spin duration-5000 delay-300"
          src="/img4.png"
          width={80}
          height={80}
          alt="1"
        />
      </div>

      <div className="bg-[#F7EBED] p-10 font-extralight italic font-urbanist overflow-hidden relative pb-20">
        <TextGenerateEffect
          className="z-10 relative font-light text-xs md:text-lg overflow-hidden"
          words={text}
        />
        <div className="z-10 flex overflow-hidden mt-10">
          <div className="flex gap-5 animate-infinity-slide flex-shrink-0 overflow-hidden pr-5">
            <Image
              className="aspect-square md:h-64 md:w-64 object-cover object-center rounded"
              src="/aralie1.png"
              width={100}
              height={100}
              alt="aralie"
            />
            <Image
              className="aspect-square md:h-64 md:w-64 object-cover object-center rounded"
              src="/aralie2.png"
              width={100}
              height={100}
              alt="aralie"
            />
            <Image
              className="aspect-square md:h-64 md:w-64 object-cover object-center rounded"
              src="/aralie3.png"
              width={100}
              height={100}
              alt="aralie"
            />
            <Image
              className="aspect-square md:h-64 md:w-64 object-cover object-center rounded"
              src="/aralie4.png"
              width={100}
              height={100}
              alt="aralie"
            />
            <Image
              className="aspect-square md:h-64 md:w-64 object-cover object-center rounded"
              src="/aralie5.png"
              width={100}
              height={100}
              alt="aralie"
            />
            <Image
              className="aspect-square md:h-64 md:w-64 object-cover object-center rounded"
              src="/aralie6.png"
              width={100}
              height={100}
              alt="aralie"
            />
          </div>
          <div className="flex gap-5 overflow-hidden animate-infinity-slide flex-shrink-0">
            <Image
              className="aspect-square md:h-64 md:w-64 object-cover object-center rounded"
              src="/aralie1.png"
              width={100}
              height={100}
              alt="aralie"
            />
            <Image
              className="aspect-square md:h-64 md:w-64 object-cover object-center rounded"
              src="/aralie2.png"
              width={100}
              height={100}
              alt="aralie"
            />
            <Image
              className="aspect-square md:h-64 md:w-64 object-cover object-center rounded"
              src="/aralie3.png"
              width={100}
              height={100}
              alt="aralie"
            />
            <Image
              className="aspect-square md:h-64 md:w-64 object-cover object-center rounded"
              src="/aralie4.png"
              width={100}
              height={100}
              alt="aralie"
            />
            <Image
              className="aspect-square md:h-64 md:w-64 object-cover object-center rounded"
              src="/aralie5.png"
              width={100}
              height={100}
              alt="aralie"
            />
            <Image
              className="aspect-square md:h-64 md:w-64 object-cover object-center rounded"
              src="/aralie6.png"
              width={100}
              height={100}
              alt="aralie"
            />
          </div>
        </div>
        <div className="z-10 absolute left-0 right-0 bottom-0 h-10 flex justify-center">
          <h1 className="font-montserrat font-light text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-900">
            Created with ❤️ by Muhammad Mifta.
          </h1>
        </div>
        <Image
          className="absolute bottom-1/2 animate-irregular-move-1"
          src="/img1.png"
          width={80}
          height={80}
          alt="1"
        />
        <Image
          className="absolute bottom-1/3 right-10 animate-irregular-move-2"
          src="/img4.png"
          width={80}
          height={80}
          alt="1"
        />
        <Image
          className="absolute top-64 right-10 animate-irregular-move-3"
          src="/img1.png"
          width={80}
          height={80}
          alt="1"
        />
        <Image
          className="absolute top-1/4 animate-irregular-move-1"
          src="/img4.png"
          width={80}
          height={80}
          alt="1"
        />
      </div>
    </>
  );
}
