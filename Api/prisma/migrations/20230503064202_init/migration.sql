-- CreateTable
CREATE TABLE "ticket" (
    "id" SERIAL NOT NULL,
    "titre" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "statut" TEXT NOT NULL DEFAULT 'à faire',

    CONSTRAINT "ticket_pkey" PRIMARY KEY ("id")
);
