<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Collection;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->getUsers()->each(function (array $user) {
            User::query()->firstOrCreate([
                'email' => $user['email'],
            ], $user);
        });
    }

    /**
     * @return Collection
     */
    private function getUsers(): Collection
    {
        return collect([
            [
                'name'              => 'Admin',
                'email'             => 'admin@example.com',
                'password'          => bcrypt('123456'),
                'email_verified_at' => now(),
            ],
        ]);
    }
}
