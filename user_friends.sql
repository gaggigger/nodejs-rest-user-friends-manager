CREATE TABLE `user_friends` (
  `id1` int(11) NOT NULL,
  `id2` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `user_friends`
  ADD UNIQUE KEY `friends` (`id1`,`id2`);