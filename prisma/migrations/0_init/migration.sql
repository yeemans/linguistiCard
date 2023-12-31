-- CreateTable
CREATE TABLE "decks" (
    "id" SERIAL NOT NULL,
    "user_id" VARCHAR(255),
    "name" VARCHAR(255),
    "front_topic" VARCHAR(255),
    "back_topic" VARCHAR(255),

    CONSTRAINT "decks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "flashcards" (
    "id" SERIAL NOT NULL,
    "deck_id" INTEGER,
    "name" VARCHAR(255),
    "front" VARCHAR(255),
    "frontislink" BOOLEAN,
    "back" VARCHAR(255),
    "backislink" BOOLEAN,

    CONSTRAINT "flashcards_pkey" PRIMARY KEY ("id")
);

