/*
  Warnings:

  - You are about to drop the column `otp` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `otpExpirationTime` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[googleID]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `users_otp_key` ON `users`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `otp`,
    DROP COLUMN `otpExpirationTime`,
    ADD COLUMN `googleAccessToken` VARCHAR(191) NULL,
    ADD COLUMN `googleID` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `users_googleID_key` ON `users`(`googleID`);
