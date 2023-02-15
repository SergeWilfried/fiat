-- CreateEnum
CREATE TYPE "EnumUserStatus" AS ENUM ('Approved', 'Pending', 'Rejected');

-- CreateEnum
CREATE TYPE "EnumTransactionStatus" AS ENUM ('Successful', 'Pending', 'Failed');

-- CreateEnum
CREATE TYPE "EnumTransactionTransactionSubtype" AS ENUM ('Momo', 'Bank', 'Cash', 'Crypto');

-- CreateEnum
CREATE TYPE "EnumTransactionTransactionType" AS ENUM ('Credit', 'Debit');

-- CreateEnum
CREATE TYPE "EnumAccountCurrency" AS ENUM ('Xof', 'Eur', 'Usd', 'Celo');

-- CreateEnum
CREATE TYPE "EnumAccountStatus" AS ENUM ('Approved', 'Pending', 'Blocked');

-- CreateEnum
CREATE TYPE "EnumDocumentDocumentType" AS ENUM ('Driverlicence', 'Passport', 'GovernmentId');

-- CreateEnum
CREATE TYPE "EnumDocumentStatus" AS ENUM ('Approved', 'Rejected');

-- CreateTable
CREATE TABLE "User" (
    "address" JSONB NOT NULL,
    "businessName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "firstName" TEXT,
    "id" TEXT NOT NULL,
    "lastName" TEXT,
    "password" TEXT NOT NULL,
    "phoe" TEXT NOT NULL,
    "roles" JSONB NOT NULL,
    "status" "EnumUserStatus",
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "amount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fee" DOUBLE PRECISION,
    "id" TEXT NOT NULL,
    "status" "EnumTransactionStatus" NOT NULL,
    "transactionSubtype" "EnumTransactionTransactionSubtype",
    "transactionType" "EnumTransactionTransactionType" NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "address_1" TEXT,
    "address_2" TEXT,
    "city" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "state" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "zip" INTEGER,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "availableBalance" DOUBLE PRECISION,
    "balance" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "currency" "EnumAccountCurrency",
    "description" TEXT,
    "id" TEXT NOT NULL,
    "name" TEXT,
    "status" "EnumAccountStatus",
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Document" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "documentType" "EnumDocumentDocumentType" NOT NULL,
    "id" TEXT NOT NULL,
    "status" "EnumDocumentStatus",
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "url" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AccountToTransaction" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_businessName_key" ON "User"("businessName");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Document_url_key" ON "Document"("url");

-- CreateIndex
CREATE UNIQUE INDEX "_AccountToTransaction_AB_unique" ON "_AccountToTransaction"("A", "B");

-- CreateIndex
CREATE INDEX "_AccountToTransaction_B_index" ON "_AccountToTransaction"("B");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AccountToTransaction" ADD CONSTRAINT "_AccountToTransaction_A_fkey" FOREIGN KEY ("A") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AccountToTransaction" ADD CONSTRAINT "_AccountToTransaction_B_fkey" FOREIGN KEY ("B") REFERENCES "Transaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;
