/*
  Warnings:

  - You are about to drop the column `otpExpiration` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[code]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Made the column `email` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `otpExpiration`,
    ADD COLUMN `code` VARCHAR(191) NULL,
    ADD COLUMN `codeExpirationTime` DATETIME(3) NULL,
    ADD COLUMN `otpExpirationTime` DATETIME(3) NULL,
    MODIFY `email` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `users_code_key` ON `users`(`code`);
