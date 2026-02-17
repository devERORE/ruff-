CREATE TABLE `events` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`event_type` text NOT NULL,
	`client_name` text,
	`date` text NOT NULL,
	`start_time` text,
	`end_time` text,
	`location` text,
	`color` text DEFAULT '#C9A962' NOT NULL,
	`description` text,
	`created_at` text NOT NULL
);
