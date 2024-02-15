-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `passwordHash` VARCHAR(191) NOT NULL,
    `avatarUrl` VARCHAR(191) NULL,
    `otp` VARCHAR(191) NULL,
    `otpExpiration` DATETIME(3) NULL,

    UNIQUE INDEX `users_name_key`(`name`),
    UNIQUE INDEX `users_email_key`(`email`),
    UNIQUE INDEX `users_phone_key`(`phone`),
    UNIQUE INDEX `users_passwordHash_key`(`passwordHash`),
    UNIQUE INDEX `users_otp_key`(`otp`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users_profile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bio` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `users_profile_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `posts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `commentsCount` INTEGER NOT NULL,
    `viewsCount` INTEGER NOT NULL,
    `imageUrl` VARCHAR(191) NULL,
    `videoUrl` VARCHAR(191) NULL,
    `userId` INTEGER NOT NULL,

    INDEX `posts_userId_fkey`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `comments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `text` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `postId` INTEGER NOT NULL,

    INDEX `comments_postId_fkey`(`postId`),
    UNIQUE INDEX `comments_userId_postId_key`(`userId`, `postId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users_profile` ADD CONSTRAINT `users_profile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `posts` ADD CONSTRAINT `posts_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comments` ADD CONSTRAINT `comments_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `posts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comments` ADD CONSTRAINT `comments_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
